import React from 'react';
import {UserDetails} from "./UserDetails/UserDetails";
import {UserAddress} from "./UserAddress/UserAddress";
import {Company} from "./Company/Company";

const User = ({user}) => {
    const {id,name,username,email,phone,website,address,company} = user;
    return (
        <div>
           <UserDetails data={{id,name,username,email,phone,website}}/>
           <UserAddress address={address}/>
           <Company company={company}/>
        </div>
    );
};

export {User};