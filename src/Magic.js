import React from 'react';

const boxStyle = {
    border: "1px solid black",
    padding: 10,
    margin: 10,
  }

class Magic extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      }
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt', 
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex];
      return (
        <div style = {boxStyle}>
          <h1>Ask the Magic Eight Ball!</h1>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange} /><br />
          <button onClick={this.ask}>
            Get Answer
          </button><br />
          <p>
            Answer: {answer}
          </p>
        </div>
      );
    }
  };

  export default Magic;