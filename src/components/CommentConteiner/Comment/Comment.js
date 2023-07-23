import React from "react";

const Comment = ({commentItem}) =>{
    const {name,email,body} = commentItem;
    return(
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Comment};