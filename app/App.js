import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    YellowBox
} from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import AppContainer from './components/navigations/RootNavigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const store = configureStore();

class Feedex extends Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }

    render () {
        return (
            <View style={styles.rootView}>
                <Provider store={store}>
                    <AppContainer onNavigationStateChange={null} />
                </Provider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootView: {
        flex: 1
    }
});


AppRegistry.registerComponent('Feedex', () => Feedex);
