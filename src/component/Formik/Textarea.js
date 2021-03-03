import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function Textarea(props) {
    const { label, name, ...rest } = props
    return (
        <div className="container" >
            <div className="row"  style={{marginLeft:"2px"}}>
                <label htmlFor={name}>{label}</label>
            </div>
            <div className="row"  style={{marginLeft:"0px" }}>
            <Field style={{width:"99%"}} as='textarea' id={name} name={name} {...rest} />
        </div>
            <ErrorMessage name={name} component={TextError} /></div>
    )
}

export default Textarea
