import React from 'react';
import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {
    const {register,reset,handleSubmit} = useForm();

    const save = (user) =>{
        fetch('http://jsonplaceholder.typicode.com/users', {
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user),
            method:'POST'
        })
            .then(value => value.json())
            .then(value => {
                setUsers(prev => [...prev,value])
                reset()
            })
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div><label><input type="text" placeholder={'Name...'} {...register('name')}/></label></div>
            <div><label><input type="text" placeholder={'Username...'} {...register('username')}/></label></div>
            <div><label><input type="email" placeholder={'Email...'} {...register('email')}/></label></div>
            <div><label><input type="text" placeholder={'City...'} {...register('address.city')}/></label></div>
            <button>Save</button>
        </form>
    );
};

export {UserForm};