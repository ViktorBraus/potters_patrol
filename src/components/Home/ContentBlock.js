import React, { Component } from 'react';
import LoginButton from "../Authentication/login-button"
import LogoutButton from "../Authentication/logout-button"
import { useAuth0 } from "@auth0/auth0-react"
const AuthNav = () => {
    const { isLoading, isAuthenticated } = useAuth0();
    return (
      <div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    );
  };
const ContentBlock = () =>
{
    return(
    <div className='Main'>
    <div className='HomePage'>
      <div className='title'>
        Discover your Wizarding World
  </div>
      <div className='homediv'>
        <div>
          Books
        <a href="http://localhost:3000/Content">
            <br /><img className='edge' width="400" height="300" src='https://media.phillyvoice.com/media/images/020420_HarryPotterBooks_HarryPotte.2e16d0ba.fill-735x490.jpg' />
          </a>
        </div>
        <div>
          Movies
            <br />
          <a href="http://localhost:3000/Content">
            <img className='edge' width="400" height="300" src='https://yc.cldmlk.com/rjks7wfanfevew4g35ze2yhczw/1591847288564_HarryPottercollage.jpg' />
          </a>
        </div>
        <div>
          Games
            <br />
          <a href="http://localhost:3000/Content">
            <img className='edge' width="400" height="300" src='https://i.ytimg.com/vi/3GMjVCHOIgg/maxresdefault.jpg' />
          </a></div>
      </div>
      <div>
      </div>
      <br />
      <AuthNav />
    </div>
    </div>
    )
}
export default ContentBlock;