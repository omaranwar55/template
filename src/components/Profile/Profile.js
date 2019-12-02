import React from 'react';
import {Bar,SpanWeb,ProfileList,SkillsTitle,ProfileItem,BarParent,BarPerc,BarTitle,ProfileSpan,ProfileTitleSpan,Skills,SkillsDesc,SkillsProfile,SkillsTitleSpan,SpanSp1,SpanSp2,SpanSp3,SrofileSkills,Profiletitle} from './style.js';

const Profile =()=> {
  

    return (
    <SrofileSkills>
            <div className="container">
                <SkillsProfile>
                    <Profiletitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</Profiletitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            Omar Anwar
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Birthday</ProfileSpan>
                            16/2/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Address</ProfileSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Phone</ProfileSpan>
                            0114-155-1774
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Email</ProfileSpan>
                            omaranwersoftware@yahoo.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>faculty</ProfileSpan>
                            <SpanWeb className="web">computer science - Ain Shams University</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </SkillsProfile>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>These are some of the skills I've learned myself. </SkillsDesc>
                    <Bar>
                        <BarTitle>HTML - css - jQuery</BarTitle>
                        <BarPerc>100%</BarPerc>
                        <BarParent>
                            <SpanSp1></SpanSp1>
                        </BarParent>
                    </Bar>
                    
                    <Bar>
                        <BarTitle>PHP</BarTitle>
                        <BarPerc>90%</BarPerc>
                        <BarParent>
                            <SpanSp2></SpanSp2>
                        </BarParent>
                    </Bar>
                    
                    <Bar>
                        <BarTitle>React Js</BarTitle>
                        <BarPerc>80%</BarPerc>
                        <BarParent>
                            <SpanSp3></SpanSp3>
                        </BarParent>
                    </Bar>
                </Skills>
                
            </div>
        </SrofileSkills>
  );
  
}

export default Profile;
