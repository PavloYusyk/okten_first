import React from 'react';

const UserDetails = ({data}) => {
    const {id,name,username,email,phone,website} = data;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
        </div>
    );
};

export {UserDetails};