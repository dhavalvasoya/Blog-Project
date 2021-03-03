import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
    const { label, name, ...rest } = props
    return (
        <div  className="container" >
            <label htmlFor={name}>{label}</label>
            <Field className="form-control " id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input
