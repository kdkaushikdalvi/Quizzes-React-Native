import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import IconFea from 'react-native-vector-icons/Feather';

import * as globals from '../../libs/globals';

import DashboardNavigation from './DashboardNavigation';
import MoreNavigation from './MoreNavigation';
import CustomTabNavigator from '../generic/TabNavigator/_TabNavigator';

const iconHeight = 30;

const TabNav = CustomTabNavigator({
    DashboardNavigation: {
        screen: DashboardNavigation,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (<IconFea name="home" size={iconHeight} color={tintColor} />),
            label: 'Dashboard',
        },
    },
    MoreNavigation: {
        screen: MoreNavigation,
        navigationOptions: {
            tabBarLabel: 'More',
            tabBarIcon: ({ tintColor }) => (<IconFea name="settings" size={iconHeight} color={tintColor} />),
            label: 'More',
        }
    },
}, {
        tabBarOptions: {
            activeTintColor: globals.COLORS.themeColor,
            inactiveTintColor: globals.COLORS.inactiveColor,
            labelStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                paddingBottom: 5
            },
            style: {
                backgroundColor: globals.COLORS.primiaryColor,
                borderTopWidth: 1,
                borderTopColor: globals.COLORS.secondaryColor,
                height: 80
            }
        }
    });


export default TabNav;

