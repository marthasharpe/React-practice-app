import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
      event.preventDefault();
      this.setState({
          input: '',
          submit: this.state.input
      });
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle = {
        border: '3px solid red'
      }
    }
    return (
      <div>
        <h3>What is your name?</h3>
        <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              style={inputStyle}
              value={this.state.input}
              onChange={this.handleChange}/>
            <button type='submit'>Submit!</button>
        </form>
        <p>{this.state.submit}</p>
      </div>
    );
  }
};

export default Name;