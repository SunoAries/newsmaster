import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    ActivityIndicator,
    ScrollView,
    TouchableHighlight,
    TextInput
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
function AAA() {
    return (
        <View style={styles.container}>
            <Text>这是关于我。blabla</Text>
        </View>
    )
}

export default AAA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f00',
    },
});
