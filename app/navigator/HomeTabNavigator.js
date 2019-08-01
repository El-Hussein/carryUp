import { 
    createBottomTabNavigator
} from 'react-navigation';

import {Image} from 'react-native';

import PackageStack from './PackageStackNavigator';
import Chat from '../screens/DrawerNavigator/HomeTapNavigator/Chat';
import Trace from '../screens/DrawerNavigator/HomeTapNavigator/Trace';
import Account from '../screens/DrawerNavigator/HomeTapNavigator/Account';

import packageIcon from '../assets/images/packageIcon';
import chatIcon from '../assets/images/chatIcon';
import traceIcon from '../assets/images/traceIcon';
import accountIcon from '../assets/images/accountIcon';

const TabNavigator = createBottomTabNavigator({
  Package: PackageStack,
  Chat: Chat,
  Trace: Trace,
  Account: Account,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Package') {
        iconName = packageIcon;
      } else if (routeName === 'chat') {
        iconName = chatIcon;
      } else if (routeName === 'trace') {
        iconName = traceIcon;
      } else if (routeName === 'account') {
        iconName = accountIcon;
      }

      return <Image source={iconName} style={{width:"6%", height:"5%"}}  />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#4512C1',
    inactiveTintColor: '#C2D2F6',
    style:{backgroundColor:'#749EEC'},
  },
});

export default TabNavigator;