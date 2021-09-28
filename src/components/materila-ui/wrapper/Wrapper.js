import React from 'react';
import Container from '@mui/material/Container/Container';

const Wrapper = ({ children }) => {
    return (
        <Container maxWidth="md">
            {children}
        </Container>
    )
}

export default Wrapper;
