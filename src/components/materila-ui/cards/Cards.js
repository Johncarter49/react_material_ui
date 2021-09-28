import React from 'react';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

const Cards = () => {
    return (
        <Grid container justifyContent="center" spacing={2}>
            {
                [0, 1, 2].map((value) => (
                    <Grid key={value} item xs={3} sm={6}>
                        <Paper style={{ height: 90 }} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Cards;
