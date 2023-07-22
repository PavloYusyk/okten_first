import React, {createContext, useState} from 'react';
import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";

const Context = createContext(null)
const UserConteiner = () => {
    const [trigger,setTrigger] = useState(null);
    const [users,setUsers] = useState([]);
    return (
        <Context.Provider value={{
            trigger,
            setTrigger:() => setTrigger(prev => !prev),
            users,
            setUsers
        }}>
            <div>
                <UserForm/>
                <hr/>
                <Users/>
            </div>
        </Context.Provider>

    );
};

export {UserConteiner,Context};