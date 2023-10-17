import React, { useState } from 'react';
import { useFormik } from "formik";

// name , email, phone, address, password
const Signup = () => {

    const formik = useFormik({
        initialValues : {
            name: '',
            phone: '',
            email: '',
            address: '',
            password: ''
        }
    })

    /**
     * The replacement of these lines are in the formik const into the initialValues part
     * @param e
     */
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName( e.target.value );
    }
    const handlePhoneChange = (e) => {
        setPhone( e.target.value );
    }
    const handleEmailChange = (e) => {
        setEmail( e.target.value );
    }
    const handleAddressChange = (e) => {
        setAddress( e.target.value );
    }
    const handlePasswordChange = (e) => {
        setPassword( e.target.value );
    }
    const handleSubmit = ( e ) => {
        e.preventDefault();
        const newUser = {
            name, email, phone, address, password
        }
        console.log( newUser);
    }
    return<div>
        <h2>User Signup</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' placeholder='Enter your name' onChange={ handleNameChange } value={name} />
            </div>
            <div>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='phone' id='phone' placeholder='Enter your phone' onChange={ handlePhoneChange } value={ phone } />
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input type='email' name='email' id='email' placeholder='Enter your email' onChange={ handleEmailChange } value={ email } />
            </div>
            <div>
                <label htmlFor='email'>Address</label>
                <input type='text' name='address' id='address' placeholder='Enter your address' onChange={ handleAddressChange } value={ address } />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' placeholder='Enter your password' onChange={ handlePasswordChange } value={ password } />
            </div>
            <button type='submit'>Signup</button>
        </form>
    </div>
}

export default Signup;