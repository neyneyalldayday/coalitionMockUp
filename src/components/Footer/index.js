import { GiMountains } from '@react-icons/all-files/gi/GiMountains';
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'




const FooterContainer = styled.div`
    background-color: #475085;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
`;

const FooterWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 10px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
       
    }
`;

const Logo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    align-items: center;
    margin-bottom: 10px;
    
`;

const LogoIcon = styled(GiMountains)`
margin-right: 20px;
margin-top: 1rem;
`;

const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;

`;

const La = styled.div`
margin-top: .5rem;
margin-left: -53rem;
display: flex;
flex-direction: column;
`;
const P = styled.p`
font-size: 1.5rem;
color: #fff;
`;
const P2 = styled.p`
font-size: 1.5rem;
margin-top: -.5rem;
color: #fff;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <Logo to='/'>
                <LogoIcon/>               
            </Logo>
            <La>
               <P>LOSANGELES</P>   
               <P2>MOUNTAINS</P2>   
              </La>      
            <WebsiteRights>L.M.{new Date().getFullYear()}</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
