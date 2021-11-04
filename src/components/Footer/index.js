import { GiMountains } from '@react-icons/all-files/Gi/GiMountains';
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
`;

const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;

`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <Logo to='/'>
                <LogoIcon/>
                    
                
            </Logo>
            <WebsiteRights>L.M.{new Date().getFullYear()}</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
