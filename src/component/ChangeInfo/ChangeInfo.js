import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeInfo extends Component {

    goBackMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>Change Info</Text>

                <TouchableOpacity onPress={this.goBackMain.bind(this)}>
                    <Text> Go BAck to Main </Text>
                </TouchableOpacity>

            </View>
        );
    }
}