import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import MoodInput from './MoodInput';

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

const Age = (props) => {
  return (
    <p>I am {props.age} years old.</p>
  )
}
Age.defaultProps = {age: 100};
Age.propTypes = {age: PropTypes.number.isRequired};

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
        <br/>
        <Age />
        <br/>
      <MoodInput />
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
