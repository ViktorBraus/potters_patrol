import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom'
import { Router, match, RouterContext, browserHistory } from 'react-router';
import Home_ from './components/Home/Home'
import Login from './components/Authentication/Login/Login'
import Regisgtry from './components/Authentication/Registry/Registry'
import Profile from './components/profile/Profile'
import Navbar from './navbar'
import footer from './footer'
import { Books } from './components/content/Books'
import { Games } from './components/content/Games'
import { Movies } from './components/content/Movies'
import { FetchBook } from './components/adminPage/FetchEmployee';
import { FetchMovie } from './components/adminPage/FetchMovie';
import { FetchGame } from './components/adminPage/FetchGame';
import { AddBook } from './components/adminPage/AddEmployee';
import { AddMovie } from './components/adminPage/AddMovie';
import { AddGame } from './components/adminPage/AddGame';
import { Content } from './components/content/content'
import './App.css'
import { Layout } from '../src/components/adminPage/Layout'
import HomeAfter from './components/Home/HomeAfter'
import {useAuth0} from "@auth0/auth0-react"
import { Counter } from './components/Counter'
const App = () =>{
  const {isAuthenticated } = useAuth0();
    const content = () => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/addMovie' component={AddMovie} />
                    <Route path='/addBook' component={AddBook} />
                    <Route path='/addGame' component={AddGame} />
                  <Route path='/fetchemployee' component={FetchBook} />
                    <Route path='/fetchmovie' component={FetchMovie} />
                    <Route path='/fetchgame' component={FetchGame} />
                  <Route path='/Layout' component={Layout} />
                  <Route path='/Book/edit/:bookid' component={AddBook} />
                    <Route path='/Movie/edit/:movieid' component={AddMovie} />
                    <Route path='/Game/edit/:gameid' component={AddGame} />
                    <Route path='/content/books/:bookid' component={Content} />
                    <Route path='/content/games/:gameid' component={Content} />
                    <Route path='/content/movies/:movieid' component={Content} />
                <Route path='/Books' component={Books} />
                <Route path='/Games' component={Games} />
                <Route path='/Movies' component={Movies} />
                <Route path='/Counter' component={Counter} />
                <Route path='/HomeAfter' component={HomeAfter} />
                <Route path='/registry' component={Regisgtry} />
                <Route path='/login' component={Login} />
                <Route path='/Home' component={Home_} />
                <Route path='/profile' component={Profile} />
                  <Route path='/' component={isAuthenticated ? HomeAfter : Home_ }/>
          </Switch>
        </BrowserRouter>
      );
    }
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <meta charset="utf-8"/>
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