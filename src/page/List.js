import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';



export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>列表页面</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00F',
    }
});
