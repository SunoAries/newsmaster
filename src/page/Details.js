import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        let {state}=this.props.navigation
        let movie = state.params.movie
        return (
            <View style={styles.container}>
                <Image style={styles.header} source={{uri:movie.images.medium}} />
                <View style={styles.text}>
                    <Text>{movie.title}</Text>
                    <Text>{movie.original_title}</Text>
                    <Text>{movie.genres.join(' ')}</Text>
                    <Text>导演：{movie.directors[0].name}</Text>
                    <Text>时长：{movie.durations}</Text>
                    <Text>得分: {movie.rating.average}</Text>
                    <Text>上映时间{movie.mainland_pubdate}</Text>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header:{
        width:400,
        height:400
    },
    text:{
        flex:1
    }
});
