import React from 'react';

const Post = ({post}) => {
    const {name,email,body} = post;
    return (
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <br/>
        </div>
    );
};

export {Post};