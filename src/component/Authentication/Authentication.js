import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, } from 'react-native';

import icBack from '../../Media/appIcon/back_white.png'; 
import icLogo from '../../Media/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }

    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }
    goBackMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    
    render() {
        const { container, row1, iconStyle, titleStyle, 
                controlStyle, signInStyle, signUpStyle,
                activeStyle, inactiveStyle, textInput,
                btnSignNow, textSignNow,  
        } = styles;

        const signInJSX = (
            <View>
                <TextInput style={textInput} placeholder='Enter your email' underlineColorAndroid='transparent' />
                <TextInput style={textInput} placeholder='Enter your password' />
                <TouchableOpacity style={btnSignNow}>
                    <Text style={textSignNow}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const signUpJSX = (
            <View>
                <TextInput style={textInput} placeholder='Enter your name' underlineColorAndroid='transparent' />
                <TextInput style={textInput} placeholder='Enter your email' />
                <TextInput style={textInput} placeholder='Enter your password' />
                <TextInput style={textInput} placeholder='Re-enter your password' />
                <TouchableOpacity style={btnSignNow}>
                    <Text style={textSignNow}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;
        
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackMain.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle} >Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
         flex: 1, 
         backgroundColor: '#3EBA77',
         padding: 20,
         justifyContent: 'space-between',

    },
    row1: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleStyle: { 
        color: '#FFF', 
        fontFamily: 'times new roman', 
        fontSize: 20 
    },
    iconStyle: { 
        width: 30, 
        height: 30 
    },

    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    activeStyle: {
        color: '#3EBA77'

    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    signInStyle: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        marginRight: 1,
        flex: 1,

    },
    textInput: {
        height: 50,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 30,

    },

    signUpStyle: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
        alignItems: 'center',
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
    },
    btnSignNow: {
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSignNow: {
        color: '#FFF',
    }
});
