import React from 'react';
import './sign-in.style.scss';

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have a acount</h2>
        <span>Sign in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
  
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
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
          <div className="buttons">
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>     
          </div>
          
        </form>
      </div>
    )
  }
}

export default SignIn;