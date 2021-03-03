import React from 'react'
import Select from './Select'
import Input from './Input'
import Textarea from './Textarea'
import RadioButtons from './RadioButton'
import CheckBox from './CheckBox'

function FormikControler(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <Input {...rest} />
        case 'select': return <Select {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'radio': return <RadioButtons {...rest} />
        case 'checkbox': return <CheckBox {...rest} />
        default: return null
    }
}

export default FormikControler
