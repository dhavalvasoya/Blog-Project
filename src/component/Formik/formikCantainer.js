import React, { useState } from 'react'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikControler from './FormikControler'
import Navbar from '../../layout/navbar'
import { useSelector } from 'react-redux'


function FormikContainer() {

    // const state = useSelector(state => state.state)
    const [registerdata, setRegisterdata] = useState({})

    const checkboxOptions = [
        { key: "HTML", value: "html" },
        { key: "CSS", value: "css" },
        { key: "Javascript", value: "js" },
    ];
    const options = [
        { key: 'B.COM', value: 'B.COM' },
        { key: 'BCA', value: 'BCA' },
        { key: 'B.B.A', value: 'B.B.A' }
    ]
    const dropdownOptions = [
        { key: ' option 1', value: 'option1' },
        { key: ' option 2', value: 'option2' },
        { key: ' option 3', value: 'option3' },
    ]
    const dropdownOptionsState = [
        { key: ' option 11', value: 'option11' },
        { key: ' option 22', value: 'option22' },
        { key: ' option 33', value: 'option33' },
    ]
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNo: '',
        address: '',
        skill: [],
        pinCode: '',
        course: '',
        city: '',
        country: '',
        state: '',
    }
    // const phoneRegex = RegExp(
    //     /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    //   );
    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Too Short!")
            .max(15, "Too Long!").required("Please input your name!"),
        phoneNo:Yup.string().min(10,"That doesn't look like a phone number" ).max(10,"That doesn't look like a phone number")
        .required( 'A phone number is required'),
        pinCode: Yup.number().min(6,"Must be exactly 6 digits" ).max(6,"Must be exactly 6 digits")
            .typeError("Only Number Allowed")
            .required("PinCode required *"),
        email: Yup.string().email('invalid email formate')
            .required('Please input your email!')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        course: Yup.string().required("Course required *"),
        country: Yup.string().required("country required *"),
        state: Yup.string().required("state required *"),
        address: Yup.string().required("Address required *"),
        city: Yup.string().required("city required *"),
        skill: Yup.array().required('Required'),

    })
    // console.log(initialValues);
    // const onsubmit = values => console.log(values);
    const onSubmit = (values, { resetForm }) => {
        return (console.log('formikd data', values),
            setRegisterdata({ values }),
            resetForm({ values: '' }))

    }
    console.log(registerdata);
    return (
        <>
            <Navbar />
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    _formik => (
                        <Form style={{ textAlign: "center" }} >
                            <FormikControler control="input" label="Name" name="name" />
                            <FormikControler control="input" label="Gmail" name="email" type="email" />
                            <FormikControler control="input" label="password" name="password" type="password" />
                            <FormikControler control="input" label="confirmPassword" name="confirmPassword" type="password" />
                            <FormikControler control="input" label="phoneNo" name="phoneNo" type="number" />
                            <FormikControler control="input" label="pinCode" name="pinCode" type="number" />
                            <FormikControler control="textarea" label="address" name="address" type="textarea" />
                            <FormikControler control='select' label='select a state' name="state" options={dropdownOptionsState} />
                            <FormikControler control='input' label='select a city' name="city" />
                            <div style={{height:"30px" ,width:"100%"}}>
                            <FormikControler control='select' label='select a country' name="country" options={dropdownOptions} />
                            </div>
                            <FormikControler control='radio' label='course:-' name='course' options={options} />
                            <FormikControler control='checkbox' label='skill:-' name='skill' options={checkboxOptions} />
                            <button type="submit">submit</button>
                            <button type="reset"> Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </>

    )
}

export default FormikContainer
