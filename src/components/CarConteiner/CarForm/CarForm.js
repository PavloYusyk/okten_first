import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";
import {Context} from "../CarConteiner";

const CarForm = () => {
    const [errors,setErrors] = useState(null);
    const {register, reset, handleSubmit,setValue } = useForm();
    const {setTrigger,carForUpdate,setCarForUpdate} = useContext(Context);

    if (carForUpdate){
        setValue('brand',  carForUpdate.brand)
        setValue('price',  carForUpdate.price)
        setValue('year',  carForUpdate.year)
    }
    const save = async (data) => {
        try {
            await carService.create(data)
            setErrors(null)
            reset()
            setTrigger()
        } catch (e){
            setErrors(e.response.data)
        }
    }

    const update = async (date) =>{
        try{
            await carService.updateById(carForUpdate.id,date)
            reset()
            setErrors(null)
            setTrigger()
            setCarForUpdate(null)

        }catch (e){
            setErrors(e.response.data)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate?save:update)}>
                <div><label><input type="text" placeholder={'Brand...'} {...register('brand')}/></label></div>
                <div><label><input type="text" placeholder={'Price'} {...register('price')}/></label></div>
                <div><label><input type="text" placeholder={'Year'} {...register('year')}/></label></div>
                <button>{!carForUpdate?'Save':'Update'}</button>
            </form>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
        </div>
    );
}

export {CarForm};