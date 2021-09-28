import React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonGroup } from '@mui/material';

const Buttons = () => {
    return (
        <ButtonGroup variant="contained" size="Large">
            <Button color="secondary"  startIcon={<SaveIcon />}>Save</Button>
            <Button color="primary"  endIcon={<DeleteIcon />}>Delete</Button>
        </ButtonGroup>
    )
}

export default Buttons;
