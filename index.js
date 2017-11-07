import React, {Component} from 'react';
import {AppRegistry, StatusBar, View, BackAndroid, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import App from './src/App';

const Navi = StackNavigator({
    Main: {screen: App},
    // Profile: {screen: ProfileScreen},
    // MovieList:{screen:MoveList}
}, {
    initialRouteName: 'Main', // 默认显示界面
    //导航栏相关设置项
    header: {
        //导航栏可见
        visible: true,
        //左上角的返回键文字, 默认是上一个页面的title
        backTitle: "返回",
        //导航栏的style
        headerStyle: {
            backgroundColor: 'red'
        },
        //导航栏的title的style
        titleStyle: {
            color: 'green'
        }
    },
    // title : 'home',
    // //导航栏的style
    //  headerStyle: {
    //             backgroundColor: 'red'
    //  },
    //         //导航栏的title的style
    //  headerTitleStyle: {
    //          color: 'blue',
    //          //居中显示
    //          alignSelf : 'center',
    //      },
    //
    // //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
    // cardStack: {
    //         gesturesEnabled: true,
    // },
    onTransitionStart: () => {
        console.log('导航栏切换开始');
    },  // 回调
    onTransitionEnd: () => {
        console.log('导航栏切换结束');
    },  // 回调
});

class Wrap extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this)
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
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
                <Navi />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


AppRegistry.registerComponent('newsmaster', () => Wrap);
