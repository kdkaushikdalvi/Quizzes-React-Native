import React from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IcoAws from 'react-native-vector-icons/FontAwesome';

import PlayGames from '../screens/PlayGames/PlayGames';
import Leaderboard from '../screens/Leaderboard/Leaderboard';
import Notificatios from '../screens/Notifications/Notificatios';
import Profile from '../screens/Profile/Profile';
import Earncoins from '../screens/Earncoins/Earncoins';
import SideMenu from '../screens/SideMenu/SideMenu';


import {View, StyleSheet} from 'react-native';


let styles = StyleSheet.create({
    tabIcon: {
        fontSize: 21,
        marginBottom: 4
    },
});

const MyDrawerNavigator = createDrawerNavigator({
    PlayGames: {
        screen: PlayGames,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <IcoAws style={[styles.tabIcon, {color: tintColor}]} name='play'/>
            )
        }
    },
    Notificatios: {
        screen: Notificatios,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <IcoAws style={[styles.tabIcon, {color: tintColor}]} name='bell'/>
            )
        }
    },
    Leaderboard: {
        screen: Leaderboard,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <IcoAws style={[styles.tabIcon, {color: tintColor}]} name='home'/>
            )
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <IcoAws style={[styles.tabIcon, {color: tintColor}]} name='cog'/>
            )
        }
    },
    Earncoins: {
        screen: Earncoins,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <IcoAws style={[styles.tabIcon, {color: tintColor}]} name='bitcoin'/>
            )
        }
    },

}, {
    contentComponent: SideMenu,
    drawerWidth: 300

});


const DrawerNav = createAppContainer(MyDrawerNavigator);

export default DrawerNav;