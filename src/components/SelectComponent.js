import React, {useState} from 'react';
import {UserConteiner} from "./UserConteiner/UserConteiner";
import {CommentConteiner} from "./CommentConteiner/CommentConteiner";

const SelectComponent = () => {

    const [selected,setSelected] = useState('');

    const handleOptionChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div>
            <label>User<input type={"radio"} name={'radio'} value={'radio1'} checked={selected === 'radio1'} onChange={handleOptionChange} /></label>
            <label>Comment<input type={"radio"} name={'radio'} value={'radio2'} checked={selected === 'radio2'} onChange={handleOptionChange}/></label>
            {selected === 'radio1' && <UserConteiner/>}
            {selected === 'radio2' && <CommentConteiner/>}
        </div>
    );
};

export {SelectComponent};