import React from 'react'
import TextField from '@mui/material/TextField'

const InputForm = ({handleChange,name,label,autoFocus,type}) => {
    return (
        <TextField
            name={name}
            label={label}
            onChange={handleChange}
            required
            fullWidth
            type={type}
            autoFocus={autoFocus}
            sx={{ margin: 2 }}
        />
    )
}

export default InputForm