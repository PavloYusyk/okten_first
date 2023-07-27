import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {name,email,body,postId,id} = comment;
    const navigate = useNavigate();
    return (
        <div>
            <br/>
            <div>ID: {id}</div>
            <div>PostID: {postId}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <button onClick={() => navigate(`posts/${postId}`)} >Get post!</button>
        </div>
    );
};

export {Comment};