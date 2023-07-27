import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import  style from './CommentsPage.module.css'

const CommentsPage = () => {
    return (
        <div className={style.CommentPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};