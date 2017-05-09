import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import Cart from './Cart/Cart.js';
import Search from './Search/Search.js';

const { height } = Dimensions.get('window'); // Lấy theo tỉ lệ màn hình


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
        return (
            <View style={{ flex: 1, }}>

                {/*TopBar*/}
                <View style={{ height: height / 8 }}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>Open Menu</Text>
                    </TouchableOpacity>
                </View>

                {/*TabBar*/}
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        //renderIcon={() => <Image source={...}/>}
                        //renderSelectedIcon={() => <Image source={...}/>}
                        //badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        //renderIcon={() => <Image source={...}/>}
                        //renderSelectedIcon={() => <Image source={...}/>}
                        //badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        //renderIcon={() => <Image source={...}/>}
                        //renderSelectedIcon={() => <Image source={...}/>}
                        //renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        //renderIcon={() => <Image source={...}/>}
                        //renderSelectedIcon={() => <Image source={...}/>}
                        //renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

export default Shop;
