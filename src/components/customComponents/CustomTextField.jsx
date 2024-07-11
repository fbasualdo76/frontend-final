import React from 'react'
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material'
const CustomTextField = ({ /*id,*/ label, variant, name, defaultValue, required, fullWidth }) => {
    return (
        <TextField sx={{ mt: 1 }}
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