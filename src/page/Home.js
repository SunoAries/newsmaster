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
    View,
    Button
} from 'react-native';
import {getNews} from '../utils/getNews'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data:null
        };
        this.setTimeout = setTimeout.bind(this)
    }

    componentDidMount() {
        let data = getNews();
        this.setState({
            loading: false,
            data:data.data
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        if (this.state.loading) {
            return this.loading()
        } else {
            return (
                <View style={styles.container}>
                    <Button
                        title="详情"
                        onPress={()=> navigate('Details')}
                    />
                    <Button
                        title="关于"
                        onPress={()=>navigate('About')}
                    />
                    <Button
                        title="列表"
                        onPress={()=>navigate('List')}
                    />
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
