import React, {createContext, useState} from 'react';
import {CommentForm} from "./CommentForm/CommentForm";
import {Comments} from "./Comments/Comments";

const Context = createContext(null)
const CommentConteiner = () => {
    const [trigger,setTrigger] = useState(null);
    const [comments,setComments] = useState([]);
    return (
        <Context.Provider value={{
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
        </Context.Provider>
    );
};

export {CommentConteiner};