import React from 'react';

class Tweets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value
        });
    }
    submitMessage(e) {
      e.preventDefault();
      this.setState({
        input: '',
        messages: this.state.messages.concat(this.state.input)
      })
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>Add Message</button>
          <ul>
          {this.state.messages.map(item => <li>{item}</li>)}
          </ul>
        </div>
      );
    }
  };

  export default Tweets;