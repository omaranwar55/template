import React ,{Component} from 'react';
import {Info1,Social,SocialP,SocialMediaSection,Info2,SocialIcon} from './style.js';
import axios from 'axios';

class SocialMedia extends Component {
  state={
    social:[]
  }

  componentDidMount(){
    axios.get('js/data.json').then( res=> { this.setState({social:res.data.social}) 
  })
  }

 render(){
  const {social}=this.state;
  const SocialList=social.map((Socialitem)=>{
    return(
      <a href={Socialitem.link} key={Socialitem.id}>
        <Social item={Socialitem.id} key={Socialitem.id}>
        <SocialIcon className={Socialitem.icon}></SocialIcon>
        <SocialP>
            <Info1>{Socialitem.title}</Info1>
            <Info2>{Socialitem.body}</Info2>
        </SocialP>
        </Social>
        </a>
    );
  })
  return (
    <SocialMediaSection>
      {SocialList}
    </SocialMediaSection>
  );
  }
}
export default SocialMedia;
