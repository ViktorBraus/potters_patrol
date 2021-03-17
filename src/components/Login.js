import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { render } from 'react-dom';
import '../App.css';
//(email) onChange={event => setCredentials({email: event.target.value, password: credentials.password})}
//(password) onChange={event => setCredentials({email: credentials.email, password: event.target.value})}
const LoginPage = (props) => {
    const history = useHistory();
    const [credentials, setCredentials] = useState({email: "", password: ""});
    return( 
        <form >
         <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign in</h2>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input 
              type='email'
              name='email'
              noValidate
              required />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input 
              type='password'
              name='password'
              noValidate
              required />
            </div>
            <div className='submit'>
        <button className="but"
  disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(credentials.email)) }
    >
  Login
</button>
    </div>
    </div>
    </div>
    </form>
    )
};
export default LoginPage;