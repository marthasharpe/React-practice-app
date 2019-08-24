import React from 'react';
import PropTypes from 'prop-types';

const Header = () => {
  return (
  <header className="App-header">
    <h1>My Practice App!</h1>
    <h2>An App just for practicing React</h2>
  </header>
  );
}

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date()
    };
  }
  render() {
    return <p>{this.state.date}</p>
  }
}

const Mood = (props) => {
  return (
    <p>Today I'm feeling {props.feeling}.</p>
  )
}
Mood.defaultProps = {feeling: 'peachy'};
Mood.propTypes = {feeling: PropTypes.string.isRequired};

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
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <p>Current Count: {this.state.count}</p>
      </div>
    );
  }
};

const List = (props) => {
  return <p>{props.listItems.join(", ")}</p>
}

const Footer = () => {
  return (
  <footer className="App-footer">
    <h3>Portfolio page:</h3>
    <a
      className="App-link"
      href="http://marthadawn.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      MarthaDawn.com
    </a>
  </footer>
  );
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <hr/>
      <h3>Today's Date:</h3>
        <Today />
        <Mood feeling={"optimistic"}/>
        <br/>
      <h3>Click buttons just for fun!</h3>
        <Counter />
        <br/>
      <h3>Todo List:</h3>
        <List listItems={["laundry", "garbage", "shopping"]} />
        <br/>
      <h3>Shopping List:</h3>
        <List listItems={["milk", "eggs", "cheese", "bread"]} />
        <br/>
      <Footer />
    </div>
  );
}

export default App;
