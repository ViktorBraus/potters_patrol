import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../App.css';
import Books from './Books'
import Games from './Games'
import Movies from './Movies'
class App extends Component {
  render() {
    return (
      <Content className='Profile' />
    );
  }
}

class Content extends Component {

  render = () => {
    
    const Content = () => {
      return (
        <div>
            <Movies/>
            <Games/>
            <Books/>
        </div>
      )
    }
    return (
      <div>
        <main>
          {Content()}
        </main>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
export default App;