import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Nav from './components/Nav/nav';
import Index from './components/Index/Index';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Index2 from './components/Index2/Index2';
import HTML from './components/HTML/HTML'
import Photoshop from './components/Photoshop/Photoshop';
import Wordpress from './components/Wordpress/Wordpress';
import Mobile from './components/Mobile/Mobile';
import All from './components/All/All';
import Resume from './components/Resume/Resume';
class App extends React.Component{
  
    render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/Home" component={Index}/>
          <Route path="/Work" component={Work}/>
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/About" component={Index2}/>
          <Route path="/Resume" component={Resume}/>
          <Route path="/contact" component= {Contact} />
          <Route path="/All" component= {All} />
          <Route path="/HTML" component= {HTML} />
          <Route path="/Photoshop" component= {Photoshop} /> 
          <Route path="/Wordpress" component= {Wordpress} />                   
          <Route path="/Mobile" component= {Mobile} />          
        </Switch>        
      </div>
      </BrowserRouter>
    )    
  }
}
export default App;