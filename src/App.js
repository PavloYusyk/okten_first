import React, {useState} from 'react';
import {UseMemo} from "./components/UseMemo";
import {UseCallBackChild} from "./components/UseCallBackChild";
import {UseCallBack} from "./components/UseCallBack";
import {TestUseToggle} from "./components/TestUseToggle/TestUseToggle";
import {TestUseArray} from "./components/TestUseArray";

const App = () => {
    // const [count1,setCount1] = useState(0);
  return (
      <div>
          {/*<button onClick={() => setCount1(prev => ++prev)}>Int1</button>*/}
          {/*<UseMemo count1={count1}/>*/}
          {/*<UseCallBack count1={count1}/>*/}
          <TestUseArray />
      </div>
  );
};

export  {App};
