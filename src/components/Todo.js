import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    Text,
} from 'react-native';

export default class Todo extends Component {
    render() {
        return (
            <Text
                onClick={this.props.onClick}
                style={{
                    textDecorationLine: this.props.completed ? 'line-through' : 'none',
                }}>
                {this.props.text}
            </Text>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}