import React ,{Component} from 'react';
import {Icon,Line,PartDesc,PartTitle,Span,WorkPart,WorkSection,WorkTitle} from './style.js';
import axios from 'axios';

class Work extends Component {
    state={
      works:[]
    }

    componentDidMount(){
      axios.get('js/data.json').then( res=> { this.setState({works:res.data.works}) })
    }

  render(){
    const {works}=this.state;
    const workslist=works.map((workitem)=>{
      return(
        <WorkPart first={workitem.id} key={workitem.id}>
        <Icon className={workitem.icon_name}></Icon>
        <PartTitle>{workitem.title}</PartTitle>
        <Line/>
        <PartDesc>
          {workitem.body}
        </PartDesc>
    </WorkPart>
      );
    })
  return (
    <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workslist}
            </div>
        </WorkSection>
  );
  }
}

export default Work;
