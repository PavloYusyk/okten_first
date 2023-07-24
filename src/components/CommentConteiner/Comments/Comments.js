import React, {useContext, useEffect} from 'react';
import {ContextComment} from "../../CommentConteiner/CommentConteiner";
import {commentService} from "../../../services/commentService";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const {comments,setComments} = useContext(ContextComment);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    },[])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};