import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Authentication from './Authentication/Authentication.js';
import OrderHistory from './OrderHistory/OrderHistory.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import Main from './Main/Main.js';

StatusBar.setHidden(true); 

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'MAIN' }}     // màn hình đc chạy đầu tiên
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}

                // nếu nam = AUTHENTICATION thì chuyển màn hình từ bên phải  qua,
                // còn lại từ bên trái
                configureScene={route => {
                    if (route.name === 'AUTHENTICATION') {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}
