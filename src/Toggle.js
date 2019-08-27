import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
            {this.state.display && <h1>Now you see me.<span role="img">😃</span></h1>}
            {!this.state.display && <h1>Now you don't!</h1>}
         </div>
      );
    }
  };

  export default Toggle;