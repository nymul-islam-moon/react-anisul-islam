/**
 * Import Third Party
 */
import React from 'react';
import Users from "./Components/Users";
import style from './style.css';
import NewUser from "./Components/NewUser";
import UsersProvider from "./Context/UsersContext";

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