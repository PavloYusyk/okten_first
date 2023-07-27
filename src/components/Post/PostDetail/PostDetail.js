import React from 'react';

const PostDetail = ({post}) => {
    const {id,title,body} = post;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    //     alert(`
    //         ID: ${id}
    //         Title: ${title}
    //         Body: ${body}
    //         `)
    );
};

export {PostDetail};