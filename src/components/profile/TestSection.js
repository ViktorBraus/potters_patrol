import React, { Component } from 'react';
import { render } from 'react-dom';
import './profile.css'
class TestSection extends Component 
{
    render = () => {
        return(
            <div>
                <label className ='Passed'>
                Passed Tests
            </label>
            <div className='testSection'>
                <br/>
                <div className='testdiv'>
                    <label className='testvariantiv'><ul><li><img></img></li><li><img></img></li><li><img></img></li></ul></label>
                </div>
                <div>
                    <button className='buttontest'>
                        Create an own Test
                    </button>
                </div>
            </div>
            </div>
        )
    }
}
export default TestSection;