import React from 'react'
import { Button } from './Button';
import styled from 'styled-components'

const Pop2 = styled.div`
height: 30rem;
width: 30rem;
background-color: #fff;
`;

export default function PopUp2({open, children, onClick}) {
    if(!open) return null;
    return (
        <Pop2>
            <Button onClick={onClick}>close</Button>
            {children}
        </Pop2>
    )
}
