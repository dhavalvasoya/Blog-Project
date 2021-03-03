import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function RadioButtons(props) {
    const { label, name, options, ...rest }=props
    return (
        <div  className="container" >
            <label>{label}</label>
            <Field name={name}{...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key} >
                                     <div className="row " style={{marginLeft:"2px"}}>
                                    <input type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value}></input>
                                    <label htmlFor={option.value}>{option.key}</label>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioButtons
