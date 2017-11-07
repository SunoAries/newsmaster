import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';


export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            position: 'unknown',
            time: new Date(),
            text: 'fuck you'
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>详细页面</Text>
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
        backgroundColor: '#0F0',
    },
});
