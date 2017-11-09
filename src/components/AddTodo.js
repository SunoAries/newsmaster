import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Button,
    TextInput
} from 'react-native';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{borderColor:'#f00'}}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    title='Add'
                    onPress ={(e) => this.handleClick(e)}
                />
            </View>
        )
    }

    handleClick(e) {
        this.props.onAddClick(this.state.text);
        this.setState({
            text:''
        })
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}