import React from 'react';
import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,StyledNavLink} from './style.js'; 
const Nav =()=>{
    return(        
        <NavbarSection>            
            <div className="container">                
                <Logo className="logo">
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><StyledNavLink className="selected" to="/Home">Home</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink className="selected" to="/Work">Work</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink className="selected" to="/Portfolio">Portfolio</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink className="selected" to="/Resume">Resume</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink className="selected" to="/About">About</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink className="selected" to="/contact">Contact</StyledNavLink></ListItem>
                </UlList>                
            </div>            
        </NavbarSection>          
    )
}
export default Nav;
