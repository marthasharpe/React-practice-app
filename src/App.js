import React from 'react';

const Header = () => {
  return (
  <header className="App-header">
    <h1>My Practice App!</h1>
    <h2>An App just for practicing React</h2>
  </header>
  );
}

const CurrentDate = (props) => {
  return (
  <div className="App-date">
      <h3>Current date:</h3>
      <p>{props.date}</p>
  </div>
  );
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
      <CurrentDate date={Date()} />
      <Footer />
    </div>
  );
}

export default App;
