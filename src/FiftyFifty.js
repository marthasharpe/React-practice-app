import React from 'react';

class Results extends React.Component {
    render() {
      return (
        <h1>
        {this.props.fiftyFifty ? "You win!" : "You lose!"}
        </h1>
      )
    };
  };
  
  class FiftyFifty extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1
      });
    }
    render() {
      let expression = Math.random() > .5;
      return (
        <div>
          <Results fiftyFifty={expression}/>
          <button onClick={this.handleClick}>Play Again</button>
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };

  export default FiftyFifty;