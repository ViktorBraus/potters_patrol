/*<a classname='home_sign_in' href="http://localhost:3000/login">
        <button>
            Sign in
        </button>
        </a> 
*/
import React, {Component } from 'react';
import { render } from 'react-dom';
import '../../App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Container, Nav, Navbar } from "react-bootstrap";
import Notifications from 'react-notify-toast'
import Spinner from '../Home/Spinner' 
import { API_URL } from '../../config'
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from '../Authentication/Login/Login';
import LoginButton from "../Authentication/login-button"
import LogoutButton from "../Authentication/logout-button"
class App extends Component {
  render() {
    return (
      <Home className='HomePage'/>
    );
  }
}

class Home extends Component {
  
  render = () => {
    const AuthNav = () => {
      const {error, isAuthenticated} = useAuth0();
      return(
        <div>
          {isAuthenticated ? <LogoutButton/> : !error ? <LoginButton/> : <div>Please Log out and verify your email<br/><LogoutButton/></div>}
        </div>
      );
    };
    const content = () => {

      return (
        
        <div className='HomePage'>
            <div className='at_hog'>
        At Hogwarts, whoever<br/>
        asks for help always gets it.
        </div>
        <p>
        For start your journey, sign in.        
        </p>
        <AuthNav/>
        <Notifications />
        </div>
      )
    }
    return (
      <div>
        <main>
          {content()}
        </main>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
export default Home;