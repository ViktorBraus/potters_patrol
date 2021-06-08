import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='vv'>
            <ul className='ul'>
                <li>
                    <a><NavLink className='lol1' to={'/'} exact activeClassName='active'>
                        �������    
                        </NavLink>
                    </a>
                </li>
                <li>
                    <NavLink className='lol1' to={'/fetchbook'} activeClassName='active'>
                        �����
                        </NavLink>
                </li>
                <li>
                    <NavLink className='lol1' to={'/fetchgame'} activeClassName='active'>
                        ����
                        </NavLink>
                </li>
                <li>
                    <NavLink to={'/fetchmovie'} activeClassName='active'>
                        Գ����  
                        </NavLink>
                </li>
                <li>
                    <NavLink to={'/fetchForum'} activeClassName='active'>
                        �����
                            </NavLink>
                </li>
                    </ul>
        </div>;
    }
}
