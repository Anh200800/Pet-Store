import React, {useState} from 'react'
import { Controller } from 'react-hook-form'
function QuantityField(props) {
    const {form, name, label, disabled} = props
    const {errors} = form
    const hasError = !!errors[name];
 return(
<FormControl error={hasError}>
    <Input htmlFor={name}>{label}</Input>
    <Controller ></Controller>
</FormControl>
 )   
}
export default QuantityField