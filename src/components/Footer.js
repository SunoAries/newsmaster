import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name
        }

        return (
            <Text style={{textDecorationLine: 'underline'}}
                  onPress={() => {
                      this.props.onFilterChange(filter)
                  }}>
                {name}
            </Text>
        )
    }

    render() {
        return (
            <View>
                <Text>
                    Show:
                    {' '}
                    {this.renderFilter('SHOW_ALL', 'All')}
                    {', '}
                    {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                    {', '}
                    {this.renderFilter('SHOW_ACTIVE', 'Active')}
                    .
                </Text>
            </View>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}