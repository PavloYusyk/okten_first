import React, {useContext, useEffect} from 'react';
import {Context} from "../../UserConteiner/UserConteiner";
import {commentService} from "../../../services/commentService";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const {comments,setComments} = useContext(Context);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    },[])

    return (
        <div>
            {comments.map(commentItem => <Comment key={commentItem.id} commentItem={commentItem}/>)}
        </div>
    );
};

export {Comments};