import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

 export const PortfolioSection=styled.div`
    background: #f8f8f8;
    overflow: hidden;    
 `
 export const PortfolioTitle=styled.h2`
    text-align: center;
    font-size: 35px;
 `
 export const Span=styled.span`
    font-weight: normal;
 `

 export const PortfolioList=styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0;
 `
 export const PortfolioItem=styled.li`
    display: inline-block;  
    width: 100px;
    padding: 10px;
    background: ${props=>props.active ? '#eb5424' : ''}
    color: ${props=>props.active ? '#fff' : '#000'}

 `
 export const NavLinkItems=styled(NavLink)`
   color: #222;
   text-decoration: none;
 `
 export const Box=styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > div {
        opacity: 1
    }
 `
 export const Img=styled.img`
    width: 100%;  
 `
 export const Overlay=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: teal;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
 `
 export const OverlayButton=styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
    
 `
 export const View=styled.div`
 width:50%;
 float: left;
 font-size: 0;
 &:hover > div {
     opacity: 1
 }
 `