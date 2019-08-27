import React from 'react';
import MoodInput from './MoodInput';
import Name from './Name';
import Age from './Age';

const User = (props) => {
    return (
        <div style={props.boxStyle} >
            <Age />
            <br/>
            <Name />
            <br/>
            <MoodInput />
            <br/>
        </div>
    )
}

export default User;