import React from 'react'

function TextError(props) {
    return (
        <div className="formikError">
            {props.children}
        </div>
    )
}

export default TextError
