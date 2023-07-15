import React, {useState} from 'react';
import PostDetail from "../PostDetail/PostDetail";

const Post = ({post}) => {
    const [isShow,setIsShow] = useState(false);
    const {id,title} = post;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={()=>setIsShow(!isShow)}>{isShow?'Hide':'Show'}</button>
            {
                isShow&& <PostDetail post={post}/>
            }
        </div>
    );
};

export default Post;