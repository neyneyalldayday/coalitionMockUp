import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'

const Pop = styled.div`
height: 20rem;
width: 20rem;
background-color: #fff;
`;


export default function PopUp({open, children, onClick}) {
    if(!open) return null


    return (
        <Pop>
            <Button onClick={onClick}>close</Button>
            {children}
        </Pop>
    )
}