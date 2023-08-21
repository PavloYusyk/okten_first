import React, {useCallback, useMemo, useState} from 'react';
import {UseCallBackChild} from "./UseCallBackChild";

const UseCallBack = ({count1}) => {
    const [count2,setCount2] = useState(0);

    const someFunc = useCallback(() =>{
        let res = 0
        for (let i = 0; i < 200000000; i++)
            res += count1
        return res
    },[count1])



    return (
        <div>
            <UseCallBackChild someFunc={someFunc}/>
            <div>Count1:{count1}</div>
            <br/>
            <button onClick={() => setCount2(prev => ++prev)}>Int2</button>
            <div>Count2:{count2}</div>
        </div>
    );
};

export {UseCallBack};