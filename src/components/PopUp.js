import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'

const Pop = styled.div`

position: absolute;
height: 15rem;
width: 20rem;
top:25%;
left:20%;
background-color: #fff;
padding: 1rem;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);


@media screen and (max-width: 420px) {
  top: 30%;
  left: 5%; 
}
`;




export default function PopUp({open, children, onClick}) {
    if(!open) return null


    return (
        <Pop>
            <Button onClick={onClick}>SCHEDULE</Button>
            {children}
        </Pop>
    )
}