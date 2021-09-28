import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        background: "Linear-gradient(45deg, #FF688B, #FF8E53",
        border: 0,
        borderRadius: 7,
        color: "#fff",
        padding:"5px 30px",
        marginBottom: "1rem",
    }
})

const StyledButton = () => {

    const classes = useStyles();

    return (
        <>
            <Button className={classes.root}>Styled Button with makesStyles</Button>
        </>
    )
}

export default StyledButton;
