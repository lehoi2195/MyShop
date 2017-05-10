import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import Collection from './Collection.js';
import Category from './Category.js';

class Home extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
                <Collection />
                <Category />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#DBDBD8' }

});


export default Home;
