import React, {useState, Component} from 'react';
import { useHistory } from "react-router-dom";
import { notify } from 'react-notify-toast';
import { API_URL } from '../config';
import Spinner from './Spinner';
import '../App.css';
//(email) onChange={event => setCredentials({email: event.target.value, password: credentials.password})}
//(password) onChange={event => setCredentials({email: credentials.email, password: event.target.value})}
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        repeatpassword: ''
      }
    };
  }
  state = {
    sendingEmail: false
  }
  onSubmit = event => {
    event.preventDefault()
    this.setState({ sendingEmail: true})
    // Super interesting to me that you can mess with the upper and lower case 
    // of the headers on the fetch call and the world does not explode.
    fetch(`${API_URL}/email`, {
      method: 'get',
      headers: {
        aCcePt: 'aPpliCaTIon/JsOn', 
        'cOntENt-type': 'applicAtion/JSoN'
      },
      zz: JSON.stringify({ 
        useremail: this.email.value,
        password: this.password.value
      })
    })
    .then(res => res.json())
    .then(data => {
      
      // Everything has come back successfully, time to update the state to 
      // reenable the button and stop the <Spinner>. Also, show a toast with a 
      // message from the server to give the user feedback and reset the form 
      // so the user can start over if she chooses.
      this.setState({ sendingEmail: false})
      notify.show(data.msg)
      this.form.reset()
    })
    .catch(err => console.log(err))
    //
  }
    render = () => {
      const { sendingEmail } = this.state
      return( 
        <form className='login'
        ref={form => this.form = form}>
         <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign in</h2>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input 
              ref={input => this.email = input}
              type='email'
              name='email'
              noValidate
              required />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input 
              ref={input => this.password = input}
              type='password'
              name='password'
              noValidate
              required />
            </div>
            <div className='submit'>
            <label><a href="http://localhost:3000/registry">Haven`t registred? Sign up</a></label>
            <button type='submit' className='but' disabled={sendingEmail}>
            {sendingEmail 
              ? <Spinner size='lg' spinning='spinning' /> 
              : "Login"
            }
          </button>
          
    </div>
    </div>
    </div>
    </form>
    )
    }
  }