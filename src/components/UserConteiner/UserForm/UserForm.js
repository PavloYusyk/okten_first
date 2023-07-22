import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../../services/userService";
import {Context} from "../UserConteiner";

const UserForm = () => {
    const [errors,setErrors]     = useState(null);
    const {register,reset,handleSubmit} = useForm();
    const {setTrigger,setUsers} = useContext(Context);
    const save = async (data) =>{
        try{
            await userService.create(data)
                .then(value => value.json())
                .then(value => {
                    setUsers(prev => [...prev,value])
                })
            setErrors(null)
            reset()
            setTrigger()
        }catch (e){
            console.log(e)
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
            {errors && <h1>{JSON.stringify(errors)}</h1>}
        </div>
    );
};

export {UserForm};