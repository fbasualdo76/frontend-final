import React from 'react'
import TextField from '@mui/material/TextField'
const CustomTextField = ({ /*id,*/ label, variant, name, defaultValue, required, fullWidth }) => {
    return (
        <TextField
            //id={id}
            label={label}
            variant={variant}
            name={name}
            defaultValue={defaultValue}
            required={required}
            fullWidth={fullWidth}
        />
    )
}
export default CustomTextField