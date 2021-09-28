import React from 'react';
import { Button } from './button/Button.styled';
import ExtendedComp from './extended-link/ExtendedComp';
import HeaderText from './header/HeaderText';
import Link from './link/Link';
import Wrapper from './wrapper/Wrapper';

const StyledComponents = () => {
    return (
        <Wrapper >
            <HeaderText>Clarusway</HeaderText>
            <HeaderText headerColor="red">Header with props</HeaderText>
            <Link secondary href="https://clarusway.com/" target="_blank" rel="noopener" >
                {" "}Learn FS Development{" "}</Link>

            <ExtendedComp>Extended from Link Comp</ExtendedComp>

            <Button>Default</Button>
            <Button primary>Primary</Button>

        </Wrapper>
    )
}

export default StyledComponents;
