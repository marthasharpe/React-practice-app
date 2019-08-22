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
      <h3>Today's Date:</h3>
      <Today />
      <Mood feeling={"optimistic"}/>
      <h3>Todo List:</h3>
      <List listItems={["laundry", "garbage", "shopping"]} />
      <h3>Shopping List:</h3>
      <List listItems={["milk", "eggs", "cheese", "bread"]} />
      <Footer />
    </div>
  );
}

export default App;
