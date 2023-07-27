import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostsService} from "../../services";
import {PostDetail} from "./PostDetail/PostDetail";

const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        PostsService.getById(postId).then(({data}) => setPost(data))
    },[postId])


    return (
        <div>
            {post&&<PostDetail post={post}/>}
        </div>
    );
};

export {Post};