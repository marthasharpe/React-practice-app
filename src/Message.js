import React from 'react';

class Dialog extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        return nextProps.message !== this.props.message;
      }
    componentWillUpdate() {
        alert('Component is about to update...');
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }
    render() {
        return <h1>{this.props.message}</h1>
    }
    componentDidUpdate() {
        alert("The component has updated.")
    }
}

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'First Message'
        };
        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
        this.setState({
            message: 'Second Message'
        });
    }
    render() {
        return (
            <div>
            <button onClick={this.changeMessage}>Update</button>
            <Dialog message={this.state.message}/>
            </div>
        );
    }
}

export default Message;