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

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null
        };
    }

    async componentDidMount() {
        getNews().then(res => {
            this.setState({
                loading: false,
                data: res.subjects
            })
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        if (this.state.loading) {
            return this.loading()
        } else {
            return (
                <ScrollView style={styles.container}>
                    <Button
                        title="关于作者"
                        onPress={() => navigate('About')}
                    />
                    <Button
                        title="列表"
                        onPress={() => navigate('List')}
                    />
                    <Button
                        title="列表"
                        onPress={() => navigate('List')}
                    />
                    {this.state.data.map(function (movie) {
                        return (
                            <TouchableHighlight
                                style={{flex: 1}}
                                key={movie.id}
                                underlayColor='#a9a9a9'
                                onPress={() => navigate('Details', {movie})}
                            >
                                <View style={{flexDirection:'row'}}>

                                    <ImageBackground
                                        style={[styles.base,{flex:1}]}
                                        source={{uri: movie.images.large}}
                                    >
                                        <Text style={{justifyContent: 'center'}}>{movie.title}</Text>
                                        <Text style={{justifyContent: 'center'}}>{movie.mainland_pudate}</Text>
                                    </ImageBackground>
                                </View>
                            </TouchableHighlight>
                        )})}
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
