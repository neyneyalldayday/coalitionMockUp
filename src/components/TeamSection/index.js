import React from 'react'
import styled from 'styled-components'
import mountain from '../../images/moutains3.jpg'

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
const TeamContent = styled.div``;
const Mountains = styled.div``;


const Teams = () => {
    return (
        <TeamContainer>
            <TeamBg>
                <TeamContent>
                    <Mountains>

                    </Mountains>
                </TeamContent>
            </TeamBg>            
        </TeamContainer>
    )
}

export default Teams
