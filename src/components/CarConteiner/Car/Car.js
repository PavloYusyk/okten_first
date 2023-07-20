import React from 'react';

const Car = ({car,setOnSave,setCarForUpdate}) => {
    const {id,brand,price,year} = car;

    const deleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{
            method:'DELETE'
        }).then(() => {setOnSave(prev => !prev)})
    };

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