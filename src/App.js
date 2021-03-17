import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

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
            {/* 
              the ':id' in this route will be the unique id the database 
              creates and is available on 'this.props' inside the <Confirm />
              component at this.props.match.params.id
            */}
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
      <div className='registrybackground'>
        {<menu className="Menu">
      Potter`s Patrol
      <a href="http://localhost:3000/registry">
        <button className="RegistryButton" typee="submit">
        </button>
        </a>
        <a href="http://localhost:3000/login">
        <button className="LoginButton" typee="submit">
        </button>
        </a>
      </menu>}
        <main>
          {content()}
        </main>
      </div>
    )
  }
}