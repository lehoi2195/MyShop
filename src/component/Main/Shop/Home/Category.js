import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import lilterIcon from '../../../../Media/temp/little.jpg';
import maxiIcon from '../../../../Media/temp/maxi.jpg';
import midiIcon from '../../../../Media/temp/midi.jpg';
import miniIcon from '../../../../Media/temp/mini.jpg';
import partyIcon from '../../../../Media/temp/party.jpg';



const { height, width } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const { wrapper, styleText, styleImage, textImagaCate, } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styleText}> LIST OF CATEROGY </Text>
                </View>

                <View style={{ flex: 4, }}>
                    <Swiper showsPagination width={widthImage} height={heightImage} >
                        <Image source={lilterIcon} style={styleImage} >
                            <Text style={textImagaCate}> Litter Dress</Text>
                        </Image>
                            
                        <Image source={maxiIcon} style={styleImage} >
                            <Text style={textImagaCate}> Maxi Dress</Text>
                        </Image>

                        <Image source={midiIcon} style={styleImage} >
                            <Text style={textImagaCate}> Midi Dress</Text>
                        </Image>

                        <Image source={miniIcon} style={styleImage} >
                            <Text style={textImagaCate}> Mini Dress</Text>
                        </Image>

                        <Image source={partyIcon} style={styleImage} >
                            <Text style={textImagaCate}> Party Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
            
        );
    }
}
const widthImage = width - 40;
const heightImage = widthImage / 2;
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
        justifyContent: 'center',
        alignItems: 'center',

    },
    textImagaCate: {
        color: '#9A9A9A',
        fontFamily: 'times new roman',
        fontSize: 18,
        
    }
});
