import React from 'react'
import TextField from '@mui/material/TextField'
const CustomTextField = ({ /*id,*/ label, variant, name, required, fullWidth }) => {
    return (
        <TextField
            //id={id}
            label={label}
            variant={variant}
            name={name}
            required={required}
            fullWidth={fullWidth}
        />
    )
}
export default CustomTextField