import React from 'react';
import MoodInput from './MoodInput';
import Name from './Name';
import PropTypes from 'prop-types';

const Age = (props) => {
    return (
      <p>I am {props.age} years old.</p>
    )
  }
  Age.defaultProps = {age: 100};
  Age.propTypes = {age: PropTypes.number.isRequired};

const User = (props) => {
    console.log(props);
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