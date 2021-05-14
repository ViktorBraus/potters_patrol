import React, { Component } from 'react';
import './HomeAfter.css';
import Notifications from 'react-notify-toast'
import ContentBlock from './ContentBlock'
import Distribution from './Distribution'
import TestSection from './TestSection';

class HomeAfter extends Component {
  state = {
    loading: true
  }
  render = () => {
    
    const content = () => {
      return (
        <div>
          <ContentBlock/>
          <div className='textstyling'>
          Start your distribution and let your 
          <br/>heart decide which faculty is yours
          </div>
          <Distribution/>
          <div className='textstyling'>
          Most popular Tests
          </div>
          <TestSection/>
          <Notifications />
        </div>
      )
    }
    return (
      <div>
        <main>
          {content()}
        </main>
      </div>
    )
  }
}
export default HomeAfter;