import React, { Component } from 'react';
import { } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CartView from './CartView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';

class Cart extends Component {
    render() {
        return (
           <Navigator
                initialRoute={{ name: 'CART_VIEW' }}     // màn hình đc chạy đầu tiên
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW': return <CartView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
           />
        );
    }
}

export default Cart;
