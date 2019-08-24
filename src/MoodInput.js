import React from 'react';

class MoodInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: 'peachy'
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value });
    }
    render() {
      return (
        <div>
            <h3>How do you feel today?</h3>
            <input value={this.state.input} onChange={this.handleChange}/>
            <p>Today I feel {this.state.input}.</p>
        </div>
      );
    }
  };

  export default MoodInput;