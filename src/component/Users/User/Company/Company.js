import React from 'react';

const Company = ({company}) => {
    const {name,catchPhrase,bs} = company;
    return (
        <div>
            <div>Name company: {name}</div>
            <div>Catch Phrase: {catchPhrase}</div>
            <div>BS: {bs}</div>
        </div>
    );
};

export {Company};