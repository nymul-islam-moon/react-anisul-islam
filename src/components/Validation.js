import react from "react";
import {useFormik} from "formik";
import * as yup from "yup";

const Validation = () => {
    const formik = useFormik({
        /**
         * Setting Initial values
         */
        initialValues : {
            name: '',
            email: '',
            phone: '',
            address: ''
        },

        /**
         * validation
         */
        validationSchema: yup.object({
            name: yup.string().min(4, "Name must have 4 characters").required(),
            email: yup.string().email().required(),
            phone: yup.number().min(11, 'Phone must have 11 digits').required(),
            address: yup.string().nullable(),
        }),


        /**
         * onSubmit
         */
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values: ""})
        }

        /**
         * handleSubmit
         */


    });

    return formik;
}

export default Validation;