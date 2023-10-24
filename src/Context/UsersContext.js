import React, {createContext, useState} from "react";

export const UsersContext = createContext({});

const UsersProvider = ({children}) => {
    const [  users, setUsers ] = useState([
        {id: 1, username: 'Anisul'},
        {id: 2, username: 'Alex'},
    ]);

    return <UsersContext.Provider value={{users,setUsers}}>
        { children }
    </UsersContext.Provider>
}

export default UsersProvider;