import React, {useEffect, useState} from 'react';
import {CommentsService} from "../../services";
import {Comment} from "./Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        CommentsService.getAll().then(({data}) => setComments(data))
    },[])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};