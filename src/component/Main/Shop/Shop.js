import React, { Component } from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import Cart from './Cart/Cart.js';
import Search from './Search/Search.js';
import Header from './Header.js';

import icHomeS from '../../../Media/appIcon/home0.png';
import icHome from '../../../Media/appIcon/home.png';
import icCartS from '../../../Media/appIcon/cart0.png';
import icCart from '../../../Media/appIcon/cart.png';
import icSearchS from '../../../Media/appIcon/search0.png';
import icSearch from '../../../Media/appIcon/search.png';
import icContactS from '../../../Media/appIcon/contact0.png';
import icContact from '../../../Media/appIcon/contact.png';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { styleIcon } = styles;
        return (
            <View style={{ flex: 1, }}>

                {/*TopBar*/}
                <Header onOpen={this.openMenu.bind(this)} />

                {/*TabBar*/}
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={icHomeS} style={styleIcon} />}
                        renderSelectedIcon={() => <Image source={icHome} style={styleIcon} />}
                        selectedTitleStyle={{ color: '#34B089' }}

                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={icCartS} style={styleIcon} />}
                        renderSelectedIcon={() => <Image source={icCart} style={styleIcon} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Cart />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={icSearchS} style={styleIcon} />}
                        renderSelectedIcon={() => <Image source={icSearch} style={styleIcon} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Search />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={icContactS} style={styleIcon} />}
                        renderSelectedIcon={() => <Image source={icContact} style={styleIcon} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    styleIcon: { 
        width: 23,
        height: 23, 
    }
});

export default Shop;
