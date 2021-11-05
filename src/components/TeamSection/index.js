import React from 'react'
import styled from 'styled-components'
import mountain from '../../images/moutains3.jpg'
import { Button } from '../Button';

const TeamContainer = styled.div`
 
     

 background-color: bisque;
  display: flex;  
  justify-content: center;
  align-items: center;
  height: 100vh;  
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
 
  
`;
const TeamBg = styled.div`
  background-image: url(${mountain}); 
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 100vh;
  background-size: cover;
  object-fit: contain;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
const TeamContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const Header = styled.div`
background-color: #fefefe;
max-height: 10rem;
top: 0;
display: flex;
flex-direction: row;

@media screen and (max-width:768px) {
   flex-direction: column;
   max-height: 30rem;
   justify-content: center;
}

`;



const H1 = styled.h1`

color: blue;
opacity: 30%;
font-size: 10rem;
justify-content: flex-start;

@media screen and (max-width:768px){
    font-size: 5rem
    
}
`;

const H2 = styled.h3`
  color: blue;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 5rem,;

  @media screen and (max-width:768px){
    font-size: 1rem;
 
}
`;

const P = styled.p`
right: 20rem;
text-align: center;
align-items: center;
justify-items: center;

`;

const Mountains = styled.div`
background-color: #475085;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
padding: 0;
line-height: 1.1;
font-weight: bold;
`;


const Teams = () => {
    return (
        <TeamContainer>
            <TeamBg>
                <TeamContent>
                    <Header>
                    <H1>02.</H1><H2>CLIMB</H2><P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nihil necessitatibus sequi nisi quisquam non reiciendis autem quibusdam doloribus? </P>
                    </Header>
                    <Mountains>
                    <Button primary="true"> mountain1 </Button>
                    <Button primary="true"> mountain2 </Button>
                    </Mountains>
                </TeamContent>
            </TeamBg>            
        </TeamContainer>
    )
}

export default Teams
