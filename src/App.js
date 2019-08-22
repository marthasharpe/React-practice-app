import React from 'react';

const Header = () => {
  return (
  <header className="App-header">
    <h1>My Practice App!</h1>
    <h2>An App just for practicing React</h2>
  </header>
  );
}

const Footer = () => {
  return (
  <footer className="App-footer">
    <p>This is a link to my portfolio page:</p>
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
      
      <Footer />
    </div>
  );
}

export default App;
