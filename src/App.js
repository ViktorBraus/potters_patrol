import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/Home'
import Regisgtry from './components/Registry'
import login from './components/Login'
import './App.css'

export default class App extends Component {
  
  render = () => {
    
    // The 'content' function determines what to show the user based on whether 
    // the server is awake or not.
    const content = () => {

      // The server is awake! React Router is used to either show the 
      // <Landing /> component where the emails are collected or the <Confirm /> 
      // component where the emails are confirmed.
      return (
        <BrowserRouter>  
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/registry' component={Regisgtry} />
            <Route exact path='/login' component={login}/>
            <Redirect from='*' to='/'/>
          </Switch>
        </BrowserRouter>
      )
    }
    return (
      // The 'container' class uses flexbox to position and center its three 
      // children: <Notifications />, <main> and <Footer /> 
      <div>
          <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          </head>
          <div className='logo'><button  className='menucursor'></button><div className='facultyimage'></div>Potter`s Patrol
            <ul className='nav'>
            <li><a href="http://localhost:3000/login">
            <button className='SearchButton'></button><br/>Search
            </a>
            </li>
            <li><a href="http://localhost:3000/login">
            <button className='ProfileButton'></button><br/>Profile 
            </a>
            </li>
            <li><a href="http://localhost:3000/login">
            <button className='AboutButton'></button><br/>About 
            </a>
            </li>
            <li><a classname='a' href="http://localhost:3000/home">
             
            <button className='HomeButton'></button><br/>Main 
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