import React ,{Component}from 'react';
import Home from './../Home/Home';
import Work from './../Work/Work';
import Portfilio from './../Portfolio/Portfolio';
import Profile from './../Profile/Profile';
import SocialMedia from './../SocialMedia/SocialMedia';
import About from './../About/About';
import Footer from './../Footer/Footer';
class Index extends Component{

    render(){
    return(
        <div>
            <Home/>
            <Work/>
            <Portfilio/>
            <Profile/>
            <About/>
            <SocialMedia/>
            <Footer/>
        </div>
    )
  }
}
export default Index;
