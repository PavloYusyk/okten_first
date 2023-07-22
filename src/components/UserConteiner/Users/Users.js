import React, {useEffect, useState} from 'react';
import axios from "axios";
import {userService} from "../../../services/userService";
import {User} from "../User/User";
const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        userService.allUsers().then(({data}) => setUsers(data))
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/> )}
        </div>
    );
};

export {Users};