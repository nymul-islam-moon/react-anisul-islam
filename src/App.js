/**
 * Import Third Party
 */
import React, {useState} from 'react';
import Users from "./Components/Users";
import style from './style.css';
import NewUser from "./Components/NewUser";
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

    const handleAddNewUser = ( newUser ) => {
        setUsers(prevUsers => [ ...prevUsers, newUser ]);
    };

    return (
        <div>
            <NewUser handleAddNewUser={handleAddNewUser}/>
            <Users users={users} handleDeleteUser={handleDeleteUser} />
        </div>
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
 *
 */