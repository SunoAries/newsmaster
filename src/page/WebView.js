'use strict'
import React, { Component } from 'react'
import { View, WebView } from 'react-native'

class WebViewPage extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {goBack} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: this.props.url}}/>
            </View>
        )
    }
}

export default WebViewPage
