import React from 'react';
import Counter from './Counter';
import Today from './Today';
import User from './User';
import Message from './Message';
import Magic from './Magic';

const styles = {
  color: "red",
  fontSize: 72,
  border: "2px solid red",
  textAlign: "center",
}

const boxStyle = {
  border: "1px solid black",
  padding: 10,
  margin: 10,
}

const Header = () => {
  return (
  <header className="App-header">
    <h1 style={styles}>My Practice App!</h1>
    <h2 style={{color: "blue"}}>An App just for practicing React</h2>
  </header>
  );
}
console.log(<header className="App-header">
<h1 style={styles}>My Practice App!</h1>
<h2 style={{color: "blue"}}>An App just for practicing React</h2>
</header>)
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
      <Today />
        <br/>
      <User boxStyle={boxStyle} />
        <br/>
      <Message />
        <br/>
      <Counter />
        <br/>
      <h3>Todo List:</h3>
        <List listItems={["laundry", "garbage", "shopping"]} />
        <br/>
      <h3>Shopping List:</h3>
        <List listItems={["milk", "eggs", "cheese", "bread"]} />
        <br/>
      <Magic />
        <br/>
      <Footer />
    </div>
  );
}

export default App;
