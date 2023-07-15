import React from 'react';

const PostDetail = ({post}) => {
    const {id,userId,title,body} = post;
    return (
        <div>
            <hr/>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr/>
        </div>
    );
};

export default PostDetail;