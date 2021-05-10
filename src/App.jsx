import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import Regisgtry from './components/Registry/Registry'
import {Login} from './components/Login/Login'
import login from './components/Login/index'
import Profile from './components/profile/Profile'
import './App.css'
import { AuthProvider } from './Auth/index'
import {PrivateRoute} from './PrivateRoute'
class App extends Component {
  render = () => {

    // The 'content' function determines what to show the user based on whether 
    // the server is awake or not.
    const content = () => {

      // The server is awake! React Router is used to either show the 
      // <Landing /> component where the emails are collected or the <Confirm /> 
      // component where the emails are confirmed.
      return (
        <AuthProvider>
          <nav>
            <NavLink to='/public'>

            </NavLink>
            <NavLink to ='/private'>
              
            </NavLink>
          </nav>
          <BrowserRouter>
            <Switch>
              <Route  path='/public' component={Home} />
              <Route  path='/registry' component={Regisgtry} />
              <Route  path='/login' component={login}/>
              <Route  path='/callback' component={Home} />
              <PrivateRoute  path='/private' component={Profile} />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      );
    }
    return (
      // The 'container' class uses flexbox to position and center its three 
      // children: <Notifications />, <main> and <Footer /> 
      <div>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        </head>
        <div className='logo'><input type='checkbox' id="settingsbutton" class="button-settings" className='menucursor'></input>
          <label for="settingsbutton"></label>
          <div className='facultyimage'></div>Potter`s Patrol
            <ul className='nav'>
            <li><a href="http://localhost:3000/login">
              <button className='SearchButton'></button><br />Search
            </a>
            </li>
            <li><a href="http://localhost:3000/private">
              <button className='ProfileButton'></button><br />Profile
            </a>
            </li>
            <li><a href="http://localhost:3000/login">
              <button className='AboutButton'></button><br />Forum
            </a>
            </li>
            <li><a classname='a' href="http://localhost:3000/callback">

              <button className='HomeButton'></button><br />Main
            </a></li>
          </ul>
        </div>

        <main>
          {content()}
        </main>
        <footer>
          <a href="https://www.facebook.com/Derekandkoral" class="fa fa-facebook"></a>
          <a href="https://www.instagram.com/viktor__braus/" class="fa fa-instagram"></a>
        </footer>
      </div>
    )
  }
}
export { App };