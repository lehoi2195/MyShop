import React, { Component } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import Collection from './Collection.js';
import Category from './Category.js';
import TopProduct from './TopProduct.js';

class HomeView extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <ScrollView style={wrapper}>
                <Collection />
                <Category navigator={this.props.navigator} />
                <TopProduct navigator={this.props.navigator} />
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#DBDBD8' }

});


export default HomeView;
