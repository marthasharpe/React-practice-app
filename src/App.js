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

const Today = (props) => {
  return (
  <div className="App-today">
      <h3>Current Date:</h3>
      <p>{props.date}</p>
  </div>
  );
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

function App() {
  return (
    <div className="App">
      <Header />
      <Today date={Date()} />
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
