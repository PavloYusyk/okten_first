import React from 'react';
import style from './Header.module.css'
import {Navigate} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <Navigate to={'todos'}>Todos</Navigate>
            <Navigate to={'albums'}>Albums</Navigate>
            <Navigate to={'comments'}>Comments</Navigate>
        </div>
    );
};

export {Header};