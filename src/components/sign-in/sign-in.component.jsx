import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" value={this.state.email} name="email" label="Email" required handleChange={this.handleChange}></FormInput>
                <FormInput type="password" value={this.state.password} name="password" label="Password" required handleChange={this.handleChange}></FormInput>
                <CustomButton type="submit">SIGN IN</CustomButton>
            </form>
        </div>
        );  
    }
}
export default SignIn;