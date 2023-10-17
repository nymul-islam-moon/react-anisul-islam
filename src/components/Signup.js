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
        },
        onSubmit: ( values, { resetForm } ) => {
            console.log( values );
            resetForm({ values: "" });
        }
    })

    return<div>
        <h2>User Signup</h2>
        <form onSubmit={ formik.handleSubmit }>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' placeholder='Enter your name' onChange={ formik.handleChange } value={formik.values.name} />
            </div>
            <div>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='phone' id='phone' placeholder='Enter your phone' onChange={ formik.handleChange } value={ formik.values.phone } />
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input type='email' name='email' id='email' placeholder='Enter your email' onChange={ formik.handleChange } value={ formik.values.email } />
            </div>
            <div>
                <label htmlFor='email'>Address</label>
                <input type='text' name='address' id='address' placeholder='Enter your address' onChange={ formik.handleChange } value={ formik.values.address } />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' placeholder='Enter your password' onChange={ formik.handleChange } value={ formik.values.password } />
            </div>
            <button type='submit'>Signup</button>
        </form>
    </div>
}

export default Signup;