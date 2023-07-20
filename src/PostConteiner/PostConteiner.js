import React, {useState} from 'react';
import {PostForm} from "./PostForm/PostForm";
import {Posts} from "./Posts/Posts";

const PostConteiner = () => {
    const [posts,setPosts] = useState([]);
    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts} setPosts={setPosts}/>
        </div>
    );
};

export {PostConteiner};