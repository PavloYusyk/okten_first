import React from 'react';
import css from "./TestUseToggle.module.css"
import {useToggle} from "../../hooks/useToggle";
const TestUseToggle = () => {
    const {value, change} = useToggle(true);
    console.log(value)
    return (
        <div className={[css.TestToggle, value?css.red:css.blue].join(' ')}>
            TestUseToggle
            <button onClick={change}>{!value?'blue':'red'}</button>
        </div>
    );
};

export {TestUseToggle};