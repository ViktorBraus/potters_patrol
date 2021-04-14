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
            </div>
            </div>
        )
    }
}
export default TestSection;