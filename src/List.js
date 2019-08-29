import React from 'react';

const textAreaStyles = {
    width: 235,
    margin: 5
};
  
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map(item => <li key={item}>{item}</li>);
        return (
        <div>
            <h1>My "To Do" List:</h1>
            <textarea
                onChange={this.handleChange}
                value={this.state.userInput}
                style={textAreaStyles}
                placeholder="Separate Items With Commas" /><br />
            <button onClick={this.handleSubmit}>Create List</button>
            <ul>
                {items}
            </ul>
        </div>
        );
    }
};

export default List;