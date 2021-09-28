import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import NetworkCheck from '@mui/icons-material/NetworkCheck';

const CheckBoxComp = () => {
    const [IsChecked, setIsChecked] = useState(false);
    return (
        <FormControlLabel
        label= "Wifi"
            control={
                <Checkbox
                    icon={<NetworkCheck /> }
                    checkedIcon={<NetworkCheck />}
                    onChange={(e)=> setIsChecked(e.target.checked)}
                    checked={IsChecked}
                />
            }>
            <Checkbox />
        </FormControlLabel>
    )
}

export default CheckBoxComp
