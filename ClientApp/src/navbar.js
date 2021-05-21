import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

const Navibar = () => {
    const auth0 = useAuth0();
    return(
        <div className='logo'>
            <input type='checkbox' id="settingsbutton" className='menucursor'></input>
            <label htmlFor="settingsbutton"></label>
            <div className='tiiitle_'><div className='facultyimage'></div></div>
            <div className='tiiitle'>Potter`s Patrol</div>
            <div className='list'><ul className='nav'>
                {auth0.isAuthenticated ? (auth0.user.email == "korolenko.viktor@chnu.edu.ua" ? <li><a href="/Layout">
                    <button className='AdminButton'></button><br />Admin
            </a>
                </li> : "" ): ""}
            <li><a href="/login">
              <button className='SearchButton'></button><br />Search
            </a>
            </li>
            <li>{auth0.isAuthenticated? <a href="/profile">
              <button className='ProfileButton'></button><br />Profile
            </a> : <a href="/profile">
              <button disabled className='ProfileButton'></button><br />Profile
            </a>}
            </li>
            <li><a href="/Counter">
              <button className='AboutButton'></button><br />Forum
            </a>
            </li>
            <li>{auth0.isAuthenticated? <a className='a' href="/HomeAfter">
              <button className='HomeButton'></button><br />Main
            </a> : <a classname='a' href="/Home">
              <button className='HomeButton'></button><br />Main
            </a>}</li>
            </ul></div>
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