import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {I18nManager} from 'react-native';

import Home from './HomeTabNavigator';
import Orders from './OrdersTabNavigator';
import Profile from '../screens/DrawerNavigator/Profile';
import CallUs from '../screens/DrawerNavigator/CallUs';
import Settings from '../screens/DrawerNavigator/Settings';
import Terms from '../screens/DrawerNavigator/Terms';
import ContentComponent from '../components/DrawerContentComponent';

export const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        Profile: {
            screen: Profile,
        },
        Orders: {
            screen: Orders,
        },
        Settings: {
            screen: Settings,
        },
        CallUs: {
            screen: CallUs,
        },
        Terms: {
            screen: Terms,
        },
        
    },
    {
        initialRouteName:"Home",
        // showsVerticalScrollIndicator: true,
        contentComponent:props => <ContentComponent {...props}/> ,
        drawerPosition: !I18nManager.isRTL? 'right':'left',
        drawerWidth:wp('80%'),
    }
)

export default DrawerNavigator;
