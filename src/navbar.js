import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

const Navibar = () =>{
    const auth0 = useAuth0();
    return(
<div className='logo'><input type='checkbox' id="settingsbutton" className='menucursor'></input>
          <label htmlFor="settingsbutton"></label>
          <div className='facultyimage'></div>Potter`s Patrol
            <ul className='nav'>
            <li><a href="http://localhost:3000/login">
              <button className='SearchButton'></button><br />Search
            </a>
            </li>
            <li>{auth0.isAuthenticated? <a href="http://localhost:3000/profile">
              <button className='ProfileButton'></button><br />Profile
            </a> : <a href="http://localhost:3000/profile">
              <button disabled className='ProfileButton'></button><br />Profile
            </a>}
            </li>
            <li><a href="http://localhost:3000/profile">
              <button className='AboutButton'></button><br />Forum
            </a>
            </li>
            <li>{auth0.isAuthenticated? <a className='a' href="http://localhost:3000/HomeAfter">
              <button className='HomeButton'></button><br />Main
            </a> : <a classname='a' href="http://localhost:3000/Home">
              <button className='HomeButton'></button><br />Main
            </a>}</li>
          </ul>

        </div>
    )
}
const Navbar = () =>
{
    return(
        <Navibar/>
    )
}
export default Navbar;