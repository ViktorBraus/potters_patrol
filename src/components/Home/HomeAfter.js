import React, { Component } from 'react';
import '../../App.css';
import Notifications from 'react-notify-toast'
import LoginButton from "../Authentication/login-button"
import LogoutButton from "../Authentication/logout-button"
import {useAuth0} from "@auth0/auth0-react"


class HomeAfter extends Component {
  state = {
    loading: true
  }
  render = () => {
    const AuthNav = () => {
      const {isAuthenticated} = useAuth0();
      
      return(
        <div>
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </div>
      );
    };
    const content = () => {
      return (
        <div className='HomePage'>
            <div className='at_hog'>
        Discover your Wizarding World
        </div>
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
export default HomeAfter;