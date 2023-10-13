import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Authentication/Login/Login'
import Regisgtry from './components/Authentication/Registry/Registry'
import Profile from './components/profile/Profile'
import Navbar from './navbar'
import footer from './footer'
import './App.css'
import HomeAfter from './components/Home/HomeAfter'
import {useAuth0} from "@auth0/auth0-react"

const App = () =>{
  const isAuthenticated = useAuth0();
    const content = () => {
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/HomeAfter' component={HomeAfter} />
            <Route path='/registry' component={Regisgtry} />
            <Route path='/login' component={Login} />
            <Route path='/Home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/' component={isAuthenticated.isAuthenticated ? HomeAfter : Home} />
          </Switch>
        </BrowserRouter>
      );
    }
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </head>
        {Navbar()}
        <main>          
          {content()}
        </main>
        {footer()}
      </div>
    )
  }
export default App ;