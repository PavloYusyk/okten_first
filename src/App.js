import React, {useState} from 'react';
import {UsersComponent} from "./component/UsersComponent";
import {Posts} from "./component/Posts/Posts";

const App = () => {
    const [user,setUser] = useState(null);
  return (
      <div>
        <UsersComponent setUser={setUser}/>

        <hr/>

          {user && <Posts user={user}/>}
      </div>
  );
};

export  {App};
