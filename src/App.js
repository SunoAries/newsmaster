/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
        this.setTimeout = setTimeout.bind(this)
    }

    componentDidMount() {
        this.setTimeout(() => this.setState({loading: false}), 3000)
    }

    render() {
        if (this.state.loading) {
            return this.loading()
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to my dick
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit App.js
                    </Text>
                    <Text style={styles.instructions}>
                        {instructions}
                    </Text>
                </View>
            );
        }
    }

    loading() {
        return (
            <View style={[styles.container, {backgroundColor: 'black'}]}>
                <Text style={styles.loading}>
                    加载中
                </Text>
                <Text style={styles.loading}>
                    这是欢迎界面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    loading: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
