import React from 'react';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custsom-button/custom-button.component';

class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value})
  }

  render() {
    return(
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
        <FormInput 
          name='email' 
          type='email' 
          value={this.state.email} 
          handleChange={this.handleChange}
          label='email'
          required 
          />
          <FormInput 
          name='password' 
          type='password' 
          value={this.state.password} 
          handleChange={this.handleChange}
          label='password'
          required 
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
            Sign in with Google 
            </CustomButton>
          </ButtonsBarContainer>
          </form>
      </SignInContainer>
    )
  }
};

export default SignIn;