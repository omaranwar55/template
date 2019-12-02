import React from 'react';
import {HomeSection,HomeInformation,HomeInfo,HomeTitle,Span,HomeDesc,HomeBtn} from './style.js'
const Home =()=>{
    return(
        <HomeSection>
        <div className="container">
            <HomeInformation>
                <HomeTitle>Omar Anwar</HomeTitle>
                <HomeInfo>Web developer</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>Web Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn className="home-btn">Let's Begin</HomeBtn>
            </HomeInformation>
        </div>
    </HomeSection>
    )
}
export default Home;
