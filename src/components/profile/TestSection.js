import React, { Component } from 'react';
import { render } from 'react-dom';
import './profile.css'
class TestSection extends Component 
{
    render = () => {
        return(
            <div className = 'testSection'>
                <br/>
                 <div className='testvariantiv'>
                <div className='ull1'>
                        <br />
                </div>
                <div className='ull1'>
                        <br />
                </div>
                <div className='ull1'>
                        <br />
                </div>
            </div>
                <div>
                    <button className='buttontest'>
                        Create an own Test
                    </button>
                </div>
            </div>
        )
    }
}
export default TestSection;