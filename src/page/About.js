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
    let content = (
        <View style={styles.contentContainer}>
            <Text style={{lineHeight: 18}}>每天一张精选妹纸图、一个精选小视频（视频源地址播放，因为视频来源于包含各大平台。。。着实不好统一播放器。。。
                ），一篇程序猿精选干货。</Text>
            <Text style={styles.contentText}>数据内容来源于代码家的
                <Text style={{textDecorationLine: 'underline'}}
                      onPress={() => {
                          // this.props.navigator.push({
                          //     component: WebViewPage,
                          //     title: 'Gank.io',
                          //     url: 'http://gank.io'
                          // })
                      }}
                > http://gank.io </Text>
                , PoberWong 完成React－Native的开发，非常感谢Veaer的设计和指点。
            </Text>
            <Text style={styles.contentText}>My Github:
                <Text style={{textDecorationLine: 'underline'}}
                      // onPress={() => {
                      //     this.props.navigator.push({
                      //         component: WebViewPage,
                      //         title: 'PoberWong',
                      //         url: 'http://github.com/Bob1993'
                      //     })
                      // }}
                > http://github.com/Bob1993 </Text>
            </Text>
            <Text style={styles.contentText}>Organization: 萧十一郎庄园</Text>
            <Text style={styles.contentText}>本项目属于个人开源项目，使用纯React-Native开发，如果你觉得这对你学习React-Native有很大的帮助，我不介意适量打赏喔～
                欢迎来访我的Github... </Text>
            <Text style={styles.contentText}>支付宝 X 微信 </Text>
        </View>
    )
    return (
        <ScrollView>
            <Text style={styles.versionText}>干 客</Text>
            <Text style={styles.versionText}>v1.0.0</Text>
            <Text style={styles.aboutText}>关于开发者</Text>
            {content}
        </ScrollView>
    )
}

export default AAA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252528'
    },
    navbar: {
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },

    imgLauncher: {
        alignSelf: 'center',
        marginTop: 114,
        width: 90,
        height: 90
    },

    contentContainer: {
        // height: 300,
        backgroundColor: 'white',
        margin: 8,
        padding: 15,
        borderRadius: 4
    },

    contentText: {
        marginTop: 13,
        lineHeight: 18
    },

    versionText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 13
    },

    aboutText: {
        fontSize: 15,
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 8,
        color: '#434243'
    }

})
