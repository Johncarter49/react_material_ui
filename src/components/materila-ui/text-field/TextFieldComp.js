import React from 'react';
import TextField from '@mui/material/TextField/TextField';

const TextFieldComp = () => {
    return (
        <div>
            <TextField 
            color="secondary"
            variant="filled"
            type="email"
            label="The email"
            placeholder="mui@mui.com"
            />
        </div>
    )
}

export default TextFieldComp
