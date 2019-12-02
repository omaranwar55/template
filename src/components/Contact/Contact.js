import React ,{Component} from 'react';
import {Drop,TextArea,FormInput,Form,DropTitle,Span,InputEmail,InputSubmit,InputText,InputExp} from './style.js';
class Contact extends Component {
    state={        
        text:"",
        mail:"",
        text2:"",
        sub:""
        }
        handletext=(e)=>{this.setState({text:e.target.value})}
        handlemail=(e)=>{this.setState({mail:e.target.value})}
        handletext2=(e)=>{this.setState({text2:e.target.value})}
        handlesub=(e)=>{this.setState({sub:e.target.value})}
        handlesubmit=(e)=>{
        e.preventDefault();
        if(this.state.text !=="" && this.state.mail !==""){
        this.setState({
            text:"",
            mail:"",
            text2:"",
            sub:""
        })
        alert("sending your data...")    
        }
        else alert("please check your data...")      
        }
  render(){
  return (
    <Drop>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="" onSubmit={this.handlesubmit}>
                    <FormInput>
                        <InputText type="text" value={this.state.text} placeholder="Your Name" onChange={this.handletext}/>
                        <InputEmail type="email"value={this.state.mail} placeholder="Your Email"onChange={this.handlemail}/>
                    </FormInput>
                    <InputExp type="text" value={this.state.text2} placeholder="Your Subject"onChange={this.handletext2}/>
                    <TextArea cols="30" rows="10" value={this.state.sub} placeholder="Your Message"onChange={this.handlesub} ></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </Drop>
  );
}
}
export default Contact;
