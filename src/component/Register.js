
import React, { useState } from 'react'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikControler from './Formik/FormikControler'
import Navbar from '../layout/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Redux/Actions/RegisterAction'
import { Redirect } from 'react-router-dom'
import {getCountries} from "country-state-picker"

function FormikContainer() {

    const state = useSelector(state => state.RegisterData)
    const dispatch = useDispatch()
    const [registerdata, setRegisterdata] = useState({
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
    })
    const [submited, setSubmited] = useState(false)
    const Countrys=  getCountries();
    console.log(Countrys);
    const checkboxOptions = [
        { key: "HTML", value: "html" },
        { key: "CSS", value: "css" },
        { key: "Javascript", value: "js" },
        { key: "react Js", value: "react js" },
    ];
    const options = [
        { key: 'B.COM', value: 'B.COM' },
        { key: 'BCA', value: 'BCA' },
        { key: 'B.B.A', value: 'B.B.A' }
    ]
    const dropdownOptions = [
        { key: ' India', value: 'India' },
        { key: ' australia', value: 'australia' },
        { key: ' UAE', value: 'UAE' },
    ]
    const dropdownOptionsState = [
        { key: ' gujrat', value: 'gujrat' },
        { key: ' QueenLand', value: 'QueenLand' },
        { key: 'dubai ', value: 'dubai' },
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


    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Too Short!")
            .max(15, "Too Long!").required("Please input your name!"),
        phoneNo: Yup.string().min(10, "That doesn't look like a phone number").max(10, "That doesn't look like a phone number")
            .required('A phone number is required'),
        pinCode: Yup.string().min(6, "Must be exactly 6 digits").max(6, "Must be exactly 6 digits")
            // .typeError("Only Number Allowed")
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
        skill: Yup.array().required('skill Required'),

    })
    // console.log(initialValues);
    // const onsubmit = values => console.log(values);
    const onSubmit = (values) => {

        setRegisterdata({ values })
        setSubmited(true)
        console.log(registerdata)
        submitHandler()
        return (dispatch(registerUser(values)))

    }
    const submitHandler = () => {
       
        if (submited) {
            <Redirect to="/login" />
        }
    }


    // console.log(registerdata);
    return (
        <>
            <Navbar />
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    _formik => (
                        <div className="container">
                            <Form><br />
                                <FormikControler control="input" label="Name :-  " name="name" />
                                <FormikControler control="input" label="Gmail :-  " name="email" type="email" />
                                <FormikControler control="input" label="password :-  " name="password" type="password" />
                                <FormikControler control="input" label="confirmPassword :-  " name="confirmPassword" type="password" />
                                <FormikControler control="input" label="phoneNo :-  " name="phoneNo" type="number" />
                                <FormikControler control="input" label="pinCode :-  " name="pinCode" type="number" />
                                <FormikControler control="textarea" label="address  " name="address" type="textarea" />
                                <FormikControler control='select' label='select a country  :- ' name="country" options={dropdownOptions} />
                                <FormikControler control='select' label='select a state  :-' name="state" options={dropdownOptionsState} />
                                <FormikControler control='input' label='select a city  :- ' name="city" />
                                <FormikControler control='radio' label='course :- ' name='course' options={options} />
                                <FormikControler control='checkbox' label='skill :- ' name='skill' options={checkboxOptions} />
                                <button type="submit"  className="btn btn-success">submit</button>
                                <button type="reset" className="btn btn-secondary"> Reset</button>
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>

    )
}

export default FormikContainer
