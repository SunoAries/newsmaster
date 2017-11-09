import React, {Component} from 'react';
import {AppRegistry, StatusBar, View, BackHandler, StyleSheet} from 'react-native';
import Main from './src/Main';


class Wrap extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this)
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
    }

    handleBack() {
        // if (navigator && navigator.getCurrentRoutes().length < 1) {
        //     navigator.pop();
        //     return true
        // }
        // return false
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='transparent'
                    translucent/>
                <Main/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


AppRegistry.registerComponent('newsmaster', () => Main);
