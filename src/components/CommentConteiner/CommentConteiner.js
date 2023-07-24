import React, {createContext, useState} from 'react';
import {CommentForm} from "./CommentForm/CommentForm";
import {Comments} from "./Comments/Comments";

const ContextComment = createContext(null)
const CommentConteiner = () => {
    const [trigger,setTrigger] = useState(null);
    const [comments,setComments] = useState([]);
    return (
        <ContextComment.Provider value={{
            trigger,
            setTrigger:() => setTrigger(prev => !prev),
            comments,
            setComments
        }}>
            <div>
                <CommentForm/>
                <hr/>
                <Comments/>
            </div>
        </ContextComment.Provider>
    );
};

export {CommentConteiner,ContextComment};