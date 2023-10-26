import React from "react";
import Validation from "./Validation";

const Create = () => {

    const formik = Validation();

    return (
        <>
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <div className="error_message">
                        <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Enter the name" />

                        { formik.touched.name && formik.errors.name && <span className="err-message">{formik.errors.name}</span>}
                    </div>

                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <div className="error_message">
                        <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Enter the email" />

                        { formik.touched.email && formik.errors.email && <span className="err-message">{formik.errors.email}</span>}
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <div className="error_message">
                        <input type="phone" id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} placeholder="Enter the phone" />

                        { formik.touched.phone && formik.errors.phone && <span className="err-message">{formik.errors.phone}</span> }
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <div className="error_message">
                        <textarea type="text" id="address" name="address" value={formik.values.address} onChange={formik.handleChange} placeholder="Enter the address"></textarea>

                        { formik.touched.address && formik.errors.address && <span className="err-message">{formik.errors.address}</span> }
                    </div>
                </div>
                <button type="submit">Create Contact</button>
            </form>
        </>
    );
};

export default Create;