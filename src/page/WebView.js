'use strict'
import React, { Component } from 'react'
import { View, WebView } from 'react-native'

class WebViewPage extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {state,goBack} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: state.params.url}}/>
            </View>
        )
    }
}

export default WebViewPage
