import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from '../src/components/adminPage/Layout';
import './App.css';
import { AddBook } from './components/adminPage/AddEmployee';
import { AddGame } from './components/adminPage/AddGame';
import { AddMovie } from './components/adminPage/AddMovie';
import { FetchBook } from './components/adminPage/FetchEmployee';
import { FetchGame } from './components/adminPage/FetchGame';
import { FetchMovie } from './components/adminPage/FetchMovie';
import Login from './components/Authentication/Login/Login';
import Regisgtry from './components/Authentication/Registry/Registry';
import { Books } from './components/content/Books';
import { Content } from './components/content/content';
import { Games } from './components/content/Games';
import { Movies } from './components/content/Movies';
import { Counter } from './components/Counter';
import Home_ from './components/Home/Home';
import HomeAfter from './components/Home/HomeAfter';
import Profile from './components/profile/Profile';
import { FacultyTest } from "./components/test/FacultyTest";
import MainTest from './components/test/MainTest';
import { PatronusTest } from "./components/test/PatronusTest";
import { WandTest } from "./components/test/WandTest";
import footer from './footer';
import Navbar from './navbar';
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
                    <Route path='/faculty' component={FacultyTest} />
                    <Route path='/wand' component={WandTest} />
                    <Route path='/patronus' component={PatronusTest} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/testSection' component={MainTest} />
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