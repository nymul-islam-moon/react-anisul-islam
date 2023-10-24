/**
 * Import Third Party
 */
import React, {useState} from 'react';
import Users from "./Components/Users";
import style from './style.css';
import NewUser from "./Components/NewUser";
import UsersProvider, {UsersContext} from "./Context/UsersContext";
/**
 * Import Custom
 */

const App = () => {

    return (
        <UsersProvider>
            <div>
                <NewUser />
                <Users />
            </div>
        </UsersProvider>
    );
};

export default App;

// CRD -> CREATE -> READ -> DELETE USER
// useContext()
// createContext()

// App -> Users -> User
// App -> NewUser

/**
 * 1. Create Context
 * 2. provide The Context
 * 3. Use The Context
 */