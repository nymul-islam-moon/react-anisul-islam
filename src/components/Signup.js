import React from 'react';
import { useFormik } from "formik";
import * as yup from  "yup";

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
        validationSchema: yup.object({
            name: yup.string().min(2, "Name must have atleast 2 characters").required(),
            phone: yup.string().min(11, "Phone Number me be 11 characters").required(),
            email: yup.string().email().required(),
            address: yup.string().min(5).required(),
            password:yup.string().min(8, "Password must be atleast 8 characters").required()
        }),
        onSubmit: ( values, { resetForm } ) => {
            console.log( values );
            resetForm({ values: "" });
        }
    })

    // console.error(z formik.errors );

    const renderNameError = formik.touched.name && formik.errors.name && <span style={{color: "red"}}>{formik.errors.name}</span>

    const renderPhoneError = formik.touched.phone && formik.touched.phone && formik.errors.phone && <span style={{color: "red"}}>{formik.errors.phone}</span>

    const renderEmailError = formik.touched.email && formik.errors.email && <span style={{color: "red"}}>{formik.errors.email}</span>

    const renderAddressError = formik.touched.address && formik.errors.address && <span style={{color: "red"}}>{formik.errors.address}</span>

    const renderPasswordError = formik.touched.password && formik.errors.password && <span style={{color: "red"}}>{formik.errors.password}</span>

    const renderForm = <form onSubmit={ formik.handleSubmit }>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' placeholder='Enter your name' onChange={ formik.handleChange } value={formik.values.name} />
            <br/>
            { renderNameError }
            <br/>
        </div>
        <div>
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' id='phone' placeholder='Enter your phone' onChange={  formik.handleChange } value={ formik.values.phone } />
            <br/>
            { renderPhoneError }
            <br/>
        </div>
        <div>
            <label htmlFor='email'>E-mail</label>
            <input type='email' name='email' id='email' placeholder='Enter your email' onChange={ formik.handleChange } value={ formik.values.email } />
            <br/>
            { renderEmailError }
            <br/>
        </div>
        <div>
            <label htmlFor='email'>Address</label>
            <input type='text' name='address' id='address' placeholder='Enter your address' onChange={ formik.handleChange } value={ formik.values.address } />
            <br/>
            { renderAddressError }
            <br/>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' placeholder='Enter your password' onChange={ formik.handleChange } value={ formik.values.password } />
            <br/>
            { renderPasswordError }
            <br/>
        </div>
        <button type='submit'>Signup</button>
    </form>;

    return<div>
        <h2>User Signup</h2>
        {renderForm}
    </div>
}

export default Signup;