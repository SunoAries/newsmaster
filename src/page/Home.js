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
    Button,
    ScrollView,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import getNews from '../utils/getNews'
import {connect} from 'react-redux'
import {getMovieList} from '../redux/actions'

class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null
        };
    }

    async componentDidMount() {
        // let res = await getNews()
        //  debugger
        //  this.setState({
        //      loading: false,
        //      data: res.subjects
        //  })
        const {dispatch} = this.props;
        dispatch(getMovieList())
    }

    render() {
        const {navigate} = this.props.navigation;
        const {movieList} = this.props;
        if (!movieList.length) {
            return this.loading()
        } else {
            return (
                <ScrollView style={styles.container}>
                    <Button
                        title="关于作者"
                        onPress={() => navigate('About')}
                    />
                    <Button
                        title="list"
                        onPress={() => navigate('WebView', {url: 'http://www.baidu.com'})}
                    />
                    <Button
                        title="列表"
                        onPress={() => navigate('Todo')}
                    />
                    {movieList.map(function (movie) {
                        return (
                            <TouchableHighlight
                                style={{flex: 1}}
                                key={movie.id}
                                underlayColor='#a9a9a9'
                                onPress={() => navigate('Details', {movie})}
                            >
                                <View style={{flexDirection: 'row'}}>

                                    <ImageBackground
                                        style={[styles.base, {flex: 1}]}
                                        source={{uri: movie.images.large}}
                                    >
                                        <Text style={{justifyContent: 'center'}}>{movie.title}</Text>
                                        <Text style={{justifyContent: 'center'}}>{movie.mainland_pudate}</Text>
                                    </ImageBackground>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </ScrollView>
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
        paddingTop: 20,
    },
    base: {
        width: 200,
        height: 200,
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

function mapStateToProps(state) {
    return {
        movieList: state.movieList
    }
}

export default connect(mapStateToProps)(App)