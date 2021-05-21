import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='vv'>
            <ul className='ul'>
                <li>
                    <a><NavLink className='lol' to={'/'} exact activeClassName='active'>
                                Home
                            </NavLink>
                     </a>   </li>
                        <li>
                    <NavLink className='lol' to={'/fetchemployee'} activeClassName='active'>
                                Books
                            </NavLink>
                        </li>
                        <li>
                    <NavLink className='lol' to={'/fetchgame'} activeClassName='active'>
                               Games
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchmovie'} activeClassName='active'>
                                Movies
                            </NavLink>
                        </li>
                    </ul>
        </div>;
    }
}
