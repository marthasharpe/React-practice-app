import React from 'react';

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

const List = (props) => {
  return (
    <div>
      <h3>Todo List:</h3>
      <p>{props.listItems.join(", ")}</p>
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
      <Today date={Date()} />
      <List listItems={["laundry", "garbage", "baths"]} />
      <Footer />
    </div>
  );
}

export default App;
