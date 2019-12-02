import React from 'react';
import {AboutSection,CreativeInfo,InfoDesc,InfoDir,InfoTitle,InfoTitleSpan} from './style.js';

const About =()=>{
    return(
        <AboutSection>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                    <InfoDir>Web Developer</InfoDir>
                    <InfoDesc>
                    -My name is Omar Mahmoud Anwar.<br></br>
                    -I have 24 years.<br></br>
                    -I studied software engineering at the Faculty of Computer and Information Sciences - Ain Shams University.<br></br>
                    </InfoDesc>
                    <InfoDesc>
                    -Graduation Project in Machine Learning with a grade  A+.<br></br>   
                    -My Grade is 2.7 ° C +.<br></br>
                    -Some of my skills : HTML - CSS - PHP - JQuery - React JS.<br></br>       
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </AboutSection>
    )
}
export default About;
