import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../../services/commentService";
import {ContextComment} from "../CommentConteiner";

const CommentForm = () => {
    const {register,reset,handleSubmit} = useForm();
    const {setComments,setTrigger} = useContext(ContextComment);
    const save = async (data) =>{
        try {
            await commentService.create(data)
                .then(value => value.data)
                .then(value => {
                    setComments(prev => [...prev,value])
                })
            reset()
            setTrigger()
        }catch (e){

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div><label><input type="text" placeholder={'Name'} {...register('name')}/></label></div>
                <div><label><input type="email" placeholder={'Email'} {...register('email')}/></label></div>
                <div><label><input type="text" placeholder={'Body'} {...register('body')}/></label></div>
                <button>Save</button>
            </form>
        </div>
    );
};

export {CommentForm};