import React, {useContext} from 'react';
import {Context} from "../CarConteiner";
import {carService} from "../../../services/carService";

const Car = ({car}) => {
    const {setCarForUpdate,setTrigger} = useContext(Context);
    const {id,brand,price,year} = car;

    const deleteCar = async () =>{
        try{
            await carService.deleteById(id)
        }catch (e){
            console.log(e.response.data)
        }finally {
            setTrigger()
        }
    }

    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export {Car};