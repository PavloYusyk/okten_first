import React from 'react';
import {useForm} from "react-hook-form";

const PostForm = ({setPosts}) => {
    const {register,reset,handleState} = useForm();

    const save = (post) => {
        fetch('http://jsonplaceholder.typicode.com/comments',{
            headers:{'content-type':'application/json'},
            body:JSON.stringify(post),
            method:'POST'
        })
            .then(value => value.json())
            .then(value => {
                setPosts(prev => ({...prev,prev}))
                reset()
            })
    }

    return (
        <form onSubmit={handleState(save)}>
            <div><label><input type="text" placeholder={'Name...'} {...register('name')}/></label></div>
            <div><label><input type="email" placeholder={'Email...'} {...register('email')}/></label></div>
            <div><label><input type="text" placeholder={'Body...'} {...register('body')}/></label></div>
            <button>Save</button>
        </form>
    );
};

export {PostForm};