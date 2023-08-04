import React, {Component} from 'react';

import style from './Header.module.css'
import {NavLink} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div className={style.Header}>
                <NavLink to={'cars'}>Cars</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
                <NavLink to={'posts'}>Posts </NavLink>
            </div>
        );
    }
}

export {Header};