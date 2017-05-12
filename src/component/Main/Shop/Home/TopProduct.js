import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import sp1 from '../../../../Media/temp/sp1.jpeg';
import sp2 from '../../../../Media/temp/sp2.jpeg';
import sp3 from '../../../../Media/temp/sp3.jpeg';
import sp4 from '../../../../Media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    goToProductDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const { container, titleContainer, title, 
                productImage, body, productContainer,
                productName, productPrice, } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}> TOP PRODUCT </Text>
                </View>
                <View style={body}>
                    
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}> 
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}> PROCDUCT NAME </Text>
                        <Text style={productPrice} > 250$ </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}> 
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}> PROCDUCT NAME </Text>
                        <Text style={productPrice}> 125$ </Text>
                    </TouchableOpacity>
                    <View style={{ height: 10, width, }} />
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}> 
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}> PROCDUCT NAME </Text>
                        <Text style={productPrice} > 250$ </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}> 
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}> PROCDUCT NAME </Text>
                        <Text style={productPrice}> 125$ </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        );
    }
}

const { width } = Dimensions.get('window');

const widthProduct = (width - 60) / 2;
const heightImageProduct = (widthProduct / 361) * 452;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        padding: 10,
        paddingTop: 0,
        

    },
    title: {
        color: '#AFAEAF',
        fontFamily: 'times new roman',
        fontSize: 18,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 5,
    },
    productContainer: {
        width: widthProduct,
        paddingBottom: 10,
        elevation: 2,
        borderRadius: 10,
    },

    productImage: {
        width: widthProduct,
        height: heightImageProduct,
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'times new roman',
        color: '#91908e',
        paddingTop: 3,


    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'times new roman',
        color: '#f75656',

    }, 
});
