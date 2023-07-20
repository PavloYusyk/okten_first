import React from 'react';

const User = ({user}) => {
    const {id,name,username,email,address:{city}} = user;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>City: {city}</div>
        </div>
    );
};

export {User};