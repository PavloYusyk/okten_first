import React from 'react';

const User = ({user,setUser}) => {
    const {id,name,username} = user;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <button onClick={()=>setUser({name,userId:id})}>Show Post</button>
        </div>
    );
};

export {User};