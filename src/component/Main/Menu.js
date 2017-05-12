import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';

import profileIcon from '../../Media/temp/profile.png';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: true
        };
    }

    goToAuthentication() {
        const { navigator } = this.props; //  navigator = this.props.navigator;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    goToChangeInfo() {
        const { navigator } = this.props; //  navigator = this.props.navigator;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    goToOrderHistory() {
        const { navigator } = this.props; //  navigator = this.props.navigator;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        const { container, imageProfile, btnStyle, 
                btnText, btnStyleSignIn, btnTextSignIn, 
                contentLogIn, username, } = sytles;
        const logOutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity 
                    onPress={this.goToAuthentication.bind(this)}
                    style={btnStyle}
                >
                    <Text style={btnText}> Sign in </Text> 
                </TouchableOpacity>
            </View>
        );

        const logInJSX = (
            <View style={contentLogIn}>
                <Text style={username}>Phung Thi Thu Huong</Text>
                <View>
                    <TouchableOpacity onPress={this.goToOrderHistory.bind(this)} style={btnStyleSignIn} >
                        <Text style={btnTextSignIn}> Order History </Text> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.goToChangeInfo.bind(this)} style={btnStyleSignIn} >
                        <Text style={btnTextSignIn}> Change Info </Text> 
                    </TouchableOpacity>

                    <TouchableOpacity style={btnStyleSignIn} >
                        <Text style={btnTextSignIn}> Sign out </Text> 
                    </TouchableOpacity>
                </View>
                <View />
            </View>
            
        );

        const nameJSX = this.state.isLogedIn ? logInJSX : logOutJSX;
        return (
            <View style={container}>
                <Image source={profileIcon} style={imageProfile} />
                { nameJSX }
            </View>
        );
    }
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#DBDBD8',
        alignItems: 'center',
    },
    imageProfile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 25,
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 70,
    },
    btnText: {
        color: '#34B089',
        fontSize: 20,
    },
    btnStyleSignIn: {
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: 200, 
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10,    
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15,
    },
    contentLogIn: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'

    },
    username: {
        color: '#FFF', 
        fontFamily: 'times rew noman', 
        fontSize: 15
    }
    
});


export default Menu;
