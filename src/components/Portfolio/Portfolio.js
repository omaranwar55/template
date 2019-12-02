import React ,{Component} from 'react';
import axios from 'axios';
import {NavLinkItems,View,Box,Span,Img,Overlay,OverlayButton,PortfolioSection,PortfolioItem,PortfolioList,PortfolioTitle} from './style.js';

class Portfolio extends Component {
  state={
    images:[],
    Photo:""
  }
  componentDidMount(){
    axios.get('js/data.json').then( res=> { this.setState({images:res.data.portfolio}) })
  }
  handleclick=(image)=>{
    this.setState({
      Photo:image
    })
  }
  render(){
   const {images}=this.state;
   const PortfolioImages=images.map( (imageItem) => {
   return(
        <Box key={imageItem.id}>
         <Img src={imageItem.image} alt=""/>
          <Overlay>
            <OverlayButton onClick={()=>this.handleclick(imageItem.image)}>
                Show Image
            </OverlayButton>
          </Overlay>
      </Box>
      );
    })
  return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active><NavLinkItems className="selected" to="/All"> All</NavLinkItems></PortfolioItem>
                <PortfolioItem><NavLinkItems className="selected" to="/HTML">HTML</NavLinkItems></PortfolioItem>
                <PortfolioItem><NavLinkItems className="selected" to="/Photoshop">Photoshop</NavLinkItems></PortfolioItem>
                <PortfolioItem><NavLinkItems className="selected" to="/Wordpress">Wordpress</NavLinkItems></PortfolioItem>
                <PortfolioItem><NavLinkItems className="selected" to="/Mobile">Mobile</NavLinkItems></PortfolioItem>
            </PortfolioList>
            <View>
            <img src={this.state.Photo}/> 
            </View>
            <div className="box">
              {PortfolioImages}
            </div>
         </PortfolioSection>
    ); 
  }
}
export default Portfolio;