import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { GiMountains } from "@react-icons/all-files/gi/GiMountains";
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import {Link} from 'gatsby';


const Nav = styled.nav`
background: ${({ active }) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,0,0,0) 100% )"};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 999;

@media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
}
`;
const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1000px;
`;
const NavLogo = styled(Link)`
color: #141414;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
`;
const NavIcon = styled(GiMountains)`
margin: 0 0.5rem 0 2rem;

`;
const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
     flex-direction: column;
     width: 100%;
     height: 90vh;
     position: absolute;
     top: ${({ click }) => (click ? "100%" : "-1000px") };
     opacity: 1;
     transition: all 0.2s ease;
     background: #fff;
  }
`;
const NavItem = styled.li`
height: 80px;

@media screen and (max-width: 960px) {
    width: 100%;
}
`;
const NavLinks = styled(Link)`
      color: #141414;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;
    font-family: "Ubuntu", sans-serif;
    text-decoration: underline;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #ff4040;
            transition: all 0.3s ease;
        }
    }
`;

const P1 = styled.p`
font-size: 1.5rem;

`;
const P2 = styled.p`
font-size: 1.5rem;
margin-top: -.5rem;
color: #475085;
`;

const La = styled.div`
text-decoration: none;
display: ${({ active }) => active ? "block" : "none"};
margin-top: 1rem;
margin-left: -37rem;

@media screen and (max-width: 960px){
    display: none;
}

`;

const Navbar = () => {

    const[click, setClick] = useState(false)
    const[scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll",  changeNav)
        return() => {
            changeNav(false)
        }
    }, [])




    return (
        <>
        <IconContext.Provider value={{color: "#141414"}} value={{display: 'block'}}>
        <Nav active={scroll} click={click}>
         <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />                    
                </NavLogo>
                <La active={scroll}>
                <P1>LOSANGELES</P1>
                <P2>MOUNTAINS</P2>
                </La>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/section1">01.History</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/section2">02.Team</NavLinks>
                    </NavItem>
                    </NavMenu>
            </NavbarContainer>
            </Nav> 
            </IconContext.Provider>
        </>
    )
}

export default Navbar
