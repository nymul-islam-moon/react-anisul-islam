import React, { useState } from 'react';
import style from './form.module.css';

export default function FORM () {

    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const {name, email, password}= user


    const handleNameChange = ( e ) => {
        setUser({ name: e.target.value, email, password });
    }

    const handleEmailChange = ( e ) => {
        setUser({ name, email: e.target.value, password });
    }

    const handlePasswordChange = ( e ) => {
        setUser({ name, email, password: e.target.value} );
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
    }

    return (
        <div className="form__class">
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name : </label>
                    <input required type="text" name="name" id="name" value={name} onChange={handleNameChange}/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email : </label>
                    <input required type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password : </label>
                    <input required type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" >Register</button>
            </form>
        </div>
    )
}