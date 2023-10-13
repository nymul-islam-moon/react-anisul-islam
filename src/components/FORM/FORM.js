import React, { useState } from 'react';
import style from './form.module.css'

export default function FORM () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = ( e ) => {
        setName(e.target.value);
    }

    const handleEmailChange = ( e ) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = ( e ) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name, // as the name and variable name is same no need to use extra name like as name: name.
            email,
            password: password
        }
        console.log(formData);
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