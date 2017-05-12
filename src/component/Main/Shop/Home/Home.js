import React, { Component } from 'react';
import { } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import HomeView from './HomeView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js';

class Home extends Component {
    render() {
        return (
           <Navigator
                initialRoute={{ name: 'HOME_VIEW' }}     // màn hình đc chạy đầu tiên
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} />;
                        case 'PRODUCT_DETAIL': return <ProductDetail navigator={navigator} />;
                        default: return <ListProduct navigator={navigator} />;
                    }
                }}
           />
        );
    }
}

export default Home;
