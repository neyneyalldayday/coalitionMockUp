import React from 'react'
import { Button } from './Button';
import styled from 'styled-components'

const Pop2 = styled.div`
position: absolute;
height: 15rem;
width: 20rem;
top: 25%;
left: 52%;
background-color: #fff;
z-index: 3;
padding: 1rem;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);


@media screen and (max-width: 768px){
    top: 55%;
    left: 20%
}

@media screen and (max-width: 420px) {
  top: 65%;
  left: 5%; 
}
`;

export default function PopUp2({open, children, onClick}) {
    if(!open) return null;
    return (
        <Pop2>
            <Button onClick={onClick}>SCHEDULE</Button>
            {children}
        </Pop2>
    )
}
