import React, {useEffect, useState} from 'react';
import {Post} from "./Post/Post";

const Posts = ({user}) => {
    const {userId, name} = user;
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json()).then(value => setPosts(value))
    },[userId])
    return (
        <div>
            <h2>{name}</h2>
            {posts.map(post =><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};