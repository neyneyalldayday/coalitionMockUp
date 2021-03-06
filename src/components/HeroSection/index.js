import React from 'react'
import img from '../../images/sky.jpg'
import img2 from '../../images/toplayer.png'
import styled from 'styled-components'


const HeroContainer = styled.div` 
 background-image: url(${img});    
 z-index: 1; 
 background-color: bisque;
  display: flex;  
  justify-content: center;
  align-items: center;
  height: 100vh;  
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #030303;
  `;

const HeroBg = styled.div`
  z-index: 3; 
  background-image: url(${img2}); 
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 100vh;
 
  object-fit: contain;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  `;





const HeroContent = styled.div` 

display: flex;
flex-direction: column;
justify-content: center;  
height: calc(100vh - 80px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px) /2);
align-items: center;
z-index: 2;
`;

const H1 = styled.h1`
margin-bottom: 6rem;
font-size: 8rem;
position: absolute;

@media screen and (max-width: 768px) {
  font-size: 5rem;
  margin-bottom: 4rem;
  top: 45%;
}

@media screen and (max-width: 420px){
  font-size: 3.5rem;
  margin-bottom: 2rem;
  top: 54%
}
`;

const H2 = styled.h1`
margin-top: 6rem;
font-size: 8rem;
position: absolute;
color: #475085;

@media screen and (max-width: 768px) {
  font-size: 5rem;
  margin-top: 4rem;
  top: 45%;
}

@media screen and (max-width: 420px){
  font-size: 3.5rem;
  margin-top: 2rem;
  top: 55%
}

`;



const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg/>           
            <HeroContent>
               <H1>LosAngeles</H1>
               <H2>Mountains</H2>
            </HeroContent>           
        </HeroContainer>
    )
}

export default HeroSection
