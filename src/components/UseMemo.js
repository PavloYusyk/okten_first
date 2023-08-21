import React, {useMemo, useState} from 'react';

const UseMemo = ({count1}) => {
    const [count2,setCount2] = useState(0);

    const someFunc = () =>{
        let res = 0
        for (let i = 0; i < 200000000; i++)
            res += count1
        return res
    }

    const res = useMemo(() => someFunc(),[count1]);

    return (
        <div>
            <div>Res:{res}</div>
            <div>Count1:{count1}</div>
            <br/>
            <button onClick={() => setCount2(prev => ++prev)}>Int2</button>
            <div>Count2:{count2}</div>
        </div>
    );
};

export {UseMemo};