import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, 
    StyleSheet, Image, ScrollView, 
} from 'react-native';

import icBackList from '../../../../Media/appIcon/backList.png';
import sp1 from '../../../../Media/temp/sp1.jpeg';

class ListProduct extends Component {
    goBackToHome() {
         const { navigator } = this.props;
         navigator.pop({ name: 'HOME_VIEW' }); 
    }
    goToProductDetail() {
         const { navigator } = this.props;
         navigator.push({ name: 'PRODUCT_DETAIL' }); 
    }
   
    render() {
        const { container, wrapper, header, 
                styleIcBack, tetxHeader,
                stProductList, stImageItem,
                lastRowItem, stInfoItem,
                nameItem, costItem,
                detailItems,
        } = styles;

        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBackToHome.bind(this)}>
                            <Image source={icBackList} style={styleIcBack} />
                        </TouchableOpacity>
                        <Text style={tetxHeader}> Party Dress </Text>
                        <View />

                    </View>

                    <View style={stProductList}>
                        <Image source={sp1} style={stImageItem} />
                        <View style={stInfoItem}>
                            <Text style={nameItem}>Lace Sleeve Si</Text>
                            <Text style={costItem}>117$</Text>
                            <Text style={{ color: 'black' }}>Material Silk</Text>
                            <View style={lastRowItem}>
                                <Text style={{ color: 'black' }}>Color RoyalBlue</Text>

                                <View style={{ width: 15, height: 15, borderRadius: 8, backgroundColor: 'cyan', }} />

                                <TouchableOpacity style={{ paddingLeft: 10 }} >
                                   <Text style={detailItems}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={stProductList}>
                        <Image source={sp1} style={stImageItem} />
                        <View style={stInfoItem}>
                            <Text style={nameItem}>Lace Sleeve Si</Text>
                            <Text style={costItem}>117$</Text>
                            <Text style={{ color: 'black' }}>Material Silk</Text>
                            <View style={lastRowItem}>
                                <Text style={{ color: 'black' }}>Color RoyalBlue</Text>

                                <View style={{ width: 15, height: 15, borderRadius: 8, backgroundColor: 'cyan', }} />

                                <TouchableOpacity style={{ paddingLeft: 10 }} >
                                   <Text style={detailItems}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={stProductList}>
                        <Image source={sp1} style={stImageItem} />
                        <View style={stInfoItem}>
                            <Text style={nameItem}>Lace Sleeve Si</Text>
                            <Text style={costItem}>117$</Text>
                            <Text style={{ color: 'black' }}>Material Silk</Text>
                            <View style={lastRowItem}>
                                <Text style={{ color: 'black' }}>Color RoyalBlue</Text>

                                <View style={{ width: 15, height: 15, borderRadius: 8, backgroundColor: 'cyan', }} />

                                <TouchableOpacity style={{ paddingLeft: 10 }} >
                                   <Text style={detailItems}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={stProductList}>
                        <Image source={sp1} style={stImageItem} />
                        <View style={stInfoItem}>
                            <Text style={nameItem}>Lace Sleeve Si</Text>
                            <Text style={costItem}>117$</Text>
                            <Text style={{ color: 'black' }}>Material Silk</Text>
                            <View style={lastRowItem}>
                                <Text style={{ color: 'black' }}>Color RoyalBlue</Text>

                                <View style={{ width: 15, height: 15, borderRadius: 8, backgroundColor: 'cyan', }} />

                                <TouchableOpacity style={{ paddingLeft: 10 }} >
                                   <Text style={detailItems}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={stProductList}>
                        <Image source={sp1} style={stImageItem} />
                        <View style={stInfoItem}>
                            <Text style={nameItem}>Lace Sleeve Si</Text>
                            <Text style={costItem}>117$</Text>
                            <Text style={{ color: 'black' }}>Material Silk</Text>
                            <View style={lastRowItem}>
                                <Text style={{ color: 'black' }}>Color RoyalBlue</Text>

                                <View style={{ width: 15, height: 15, borderRadius: 8, backgroundColor: 'cyan', }} />

                                <TouchableOpacity style={{ paddingLeft: 10 }} >
                                   <Text style={detailItems}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={stProductList}>
                        <Image source={sp1} style={stImageItem} />
                        <View style={stInfoItem}>
                            <Text style={nameItem}>Lace Sleeve Si</Text>
                            <Text style={costItem}>117$</Text>
                            <Text style={{ color: 'black' }}>Material Silk</Text>
                            <View style={lastRowItem}>
                                <Text style={{ color: 'black' }}>Color RoyalBlue</Text>

                                <View style={{ width: 15, height: 15, borderRadius: 8, backgroundColor: 'cyan', }} />

                                <TouchableOpacity style={{ paddingLeft: 10 }} >
                                   <Text style={detailItems}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#DBDBD8',
        

    },
    wrapper: {
        backgroundColor: '#FFF',
        flex: 1,
        elevation: 5,
    },

    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tetxHeader: {
        color: '#B10D65',
        fontSize: 18,
    },
    styleIcBack: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    stProductList: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderTopColor: '#F0F0F0',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderBottomColor: '#FFF',
        borderWidth: 1,
        marginLeft: 10,
       
        
    },
    stImageItem: {
        width: 90,
        height: (90 * 452) / 361,
        marginRight: 15,
    },
    stInfoItem: {
        justifyContent: 'space-between',
        flex: 1,

    },
    lastRowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    nameItem: {
        color: '#DBDBD8',
        fontSize: 22,

    },
    costItem: {
        color: '#B10D65',
        fontSize: 16,
    },
    detailItems: {
        color: '#B10D65',
        fontSize: 16,
    },

});

export default ListProduct;
