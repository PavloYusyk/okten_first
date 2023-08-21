import React, {memo} from 'react';

const UseCallBackChild = memo(({someFunc}) => {
    const res = someFunc();
    return (
        <div>
            Res:{res}
        </div>
    );
});

export {UseCallBackChild};