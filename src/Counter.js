import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
    increment() {
      this.setState({ count: this.state.count + 1});
    }
    decrement() {
      this.setState({ count: this.state.count - 1});
    }
    reset() {
      this.setState({ count: 0 });
    }
  
    render() {
      return (
        <div>
          <h3>Click buttons just for fun!</h3>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <p>Current Count: {this.state.count}</p>
        </div>
      );
    }
  };

  export default Counter;