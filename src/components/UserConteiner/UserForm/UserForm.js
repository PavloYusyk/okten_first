import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../../services/userService";

const UserForm = () => {
    const {errors,setErrors} = useState(null);
    const {register,reset,handleSubmit} = useForm();

    const save = async (data) =>{
        try{
            await userService.create(data)
            setErrors(null)
            reset()
        }catch (e){
            setErrors(e.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div><label><input type="text" placeholder={'Name'} {...register('name')}/></label></div>
                <div><label><input type="text" placeholder={'Username'} {...register('username')}/></label></div>
                <div><label><input type="email" placeholder={'Email'} {...register('email')}/></label></div>
                <div><label><input type="text" placeholder={'City'} {...register('address.city')}/></label></div>
                <button>Save</button>
            </form>
        </div>
    );
};

export {UserForm};