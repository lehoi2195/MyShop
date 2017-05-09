import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {

    goBackMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'pink' }}>
                <Text>OrderHistory</Text>
                <TouchableOpacity onPress={this.goBackMain.bind(this)}>
                    <Text> Go Back to Main </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
