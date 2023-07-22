// import React, {useState} from 'react';
//
// const CarForm = ({setOnSave}) => {
//     const initialState ={
//         brand:'',
//         price:'',
//         year:''
//     }
//     const [car,setCar] = useState(initialState);
//
//     const inputHandle = (e) => {
//         setCar(prev => ({...prev,[e.target.name]:e.target.value()}))
//     };
//
//     const save = (e) => {
//         e.preventDefault()
//         fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
//             headers:{'content-type':'application/json'},
//             body:JSON.stringify(car),
//             method:'POST'
//         }).then(value => value.json()).then(() => {
//             setOnSave(prev => !prev)
//             setCar(initialState)
//         })
//     }
//
//     return (
//         <form onSubmit={save}>
//             <div><label>Brand:<input type="text" value={car.brand} name={'brand'} onChange={inputHandle}/></label></div>
//             <div><label>Price:<input type="text" value={car.price} name={'price'} onChange={inputHandle}/></label></div>
//             <div><label>Year:<input type="text" value={car.year} name={'year'} onChange={inputHandle}/></label></div>
//         </form>
//     );
// };
//
// export {CarForm};

import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../../validators/CarValidator";
import {date} from "joi";

const CarForm = ({setOnSave,setCarForUpdate,carForUpdate}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors},
        setValue,
        watch
    } = useForm({
        mode:'all',
        resolver:joiResolver(CarValidator)
    });

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand, {shouldValidate:true})
            setValue('price',carForUpdate.price, {shouldValidate:true})
            setValue('year',carForUpdate.year, {shouldValidate:true})
        }
    },[carForUpdate])

    const save = (date) =>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
            headers:{'content-type':'application/json'},
            body:JSON.stringify(date),
            method:'POST'
        }).then(value => {
            if(!value.ok){
                throw Error(value.status + 'not ok')
            }
            return value.json()
        })
            .then(() => {
                setOnSave(prev => !prev)
                reset()

            })
            .catch(e=>{
                console.log(e)
            })

    }
    const update = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`,{
            headers:{'content-type':'application/json'},
            body:JSON.stringify(car),
            method:'PUT'
        }).then(value => value.json()).then(() => {
            setOnSave(prev => !prev)
            setCarForUpdate(null )
            reset()
        })
    }


    return (
        <form onSubmit={handleSubmit(!carForUpdate?save:update)}>
            <div><label><input type="text" placeholder={'Brand'} {...register('brand')}/></label></div>
            {errors.brand && <span>{errors.brand.message}</span>}
            <div><label><input type="text" placeholder={'Price'} {...register('price')}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label><input type="text" placeholder={'Year'} {...register('year')}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>{!carForUpdate?'Save':'Update'}</button>
        </form>
    );
};

export {CarForm};