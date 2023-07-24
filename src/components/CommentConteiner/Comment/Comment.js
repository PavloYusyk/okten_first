import React from "react";

const Comment = ({comment}) =>{
    const {name,email,body} = comment;
    return(
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <br/>
        </div>
    );
};

export {Comment};