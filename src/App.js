/**
 * Import Third Party
 */
import React, {useState} from 'react';
import Users from "./Components/Users";
import style from './style.css';
/**
 * Import Custom
 */

const App = () => {
    const [  users, setUsers ] = useState([
        {id: 1, username: 'Anisul'},
        {id: 2, username: 'Alex'},
    ]);

    const handleDeleteUser = ( id ) => {
        const filteredUsers = users.filter( user => user.id !== id );
        setUsers(filteredUsers);
    }

    return (
        <div>
            <Users users={users} handleDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default App;

// CRD -> CREATE -> READ -> DELETE USER