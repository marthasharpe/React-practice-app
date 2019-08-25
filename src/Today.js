import React from 'react';

class Today extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: Date()
      };
    }
    render() {
      return <p>Today's date is {this.state.date}</p>
    }
  }

  export default Today;