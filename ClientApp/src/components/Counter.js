import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { array } from 'yup';

export class Counter extends Component {
  static displayName = Counter.name;
    constructor(props) {
    super(props);
        this.state = {
            counter: 0,
            arr: []
        };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

    incrementCounter() {
        var newArray = this.state.arr;
          this.setState({
          counter: this.state.counter + 1,
          arr: newArray
    });
  }

  render() {
      return (
          <div className='HomePage'>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

              <p aria-live="polite">Current count: <strong>{this.state.counter}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
