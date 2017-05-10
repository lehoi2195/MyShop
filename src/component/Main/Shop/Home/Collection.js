import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import banner from '../../../../Media/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, styleText, styleImage, } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styleText}> SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 4, }}>
                    <Image source={banner} style={styleImage} />
                </View>
                
            </View>
            
        );
    }
}
const widthImage = width - 40;
const heightImage = (widthImage / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
        opacity: 0.9,
        padding: 10,
        paddingTop: 0,
    },
    styleText: {
        color: '#AFAEAF',
        fontSize: 18,
        fontFamily: 'times new roman',

    },
    styleImage: {
        height: heightImage,
        width: widthImage,

    }
});
