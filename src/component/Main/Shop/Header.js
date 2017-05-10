import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, 
         Dimensions, TextInput, StyleSheet, } from 'react-native';

import icMenu from '../../../Media/appIcon/ic_menu.png'; 
import icLogo from '../../../Media/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

class Header extends Component {
    state = {}
    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle, } = styles;
        return (
                <View style={wrapper} >
                    {/*View row -1*/}
                    <View style={row1}>
                        <TouchableOpacity onPress={this.props.onOpen}>
                            <Image source={icMenu} style={iconStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle} >Wearing a Dress</Text>
                        <Image source={icLogo} style={iconStyle} />
                    </View>

                    <View>
                        <TextInput 
                            style={textInput}
                            placeholder=' What do you want buy?'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { height: height / 20, backgroundColor: '#FFF', paddingTop: 1.5, paddingLeft: 10 },
    titleStyle: { color: '#FFF', fontFamily: 'times new roman', fontSize: 18 },
    iconStyle: { width: 25, height: 25 }

});

export default Header;
