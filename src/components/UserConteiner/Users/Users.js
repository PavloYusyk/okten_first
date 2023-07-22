import React, {useContext, useEffect} from 'react';
import {userService} from "../../../services/userService";
import {User} from "../User/User";
import {Context} from "../UserConteiner";
const Users = () => {

    const {users,setUsers,trigger} = useContext(Context);
    useEffect(() => {
            userService.getAll().then(({data}) => setUsers(data))
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/> )}
        </div>
    );
};

export {Users};