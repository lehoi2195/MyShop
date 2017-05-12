import React, { Component } from 'react';
import { } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import SearchView from './SearchView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';

class Search extends Component {
    render() {
        return (
           <Navigator
                initialRoute={{ name: 'SEARCH_VIEW' }}     // màn hình đc chạy đầu tiên
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'SEARCH_VIEW': return <SearchView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
           />
        );
    }
}

export default Search;
