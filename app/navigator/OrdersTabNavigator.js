import { 
    createBottomTabNavigator,
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation';

import NewOrdersDriver from '../screens/DrawerNavigator/OrdersTapNavigator/Driver/NewOrders';
import FinishedOrdersDriver from '../screens/DrawerNavigator/OrdersTapNavigator/Driver/FinishedOrders';

import Authload from '../screens/Authload';

import NewOrdersUser from '../screens/DrawerNavigator/OrdersTapNavigator/User/NewOrders';
import CurrentOrdersUser from '../screens/DrawerNavigator/OrdersTapNavigator/User/CurrentOrders';
import FinishedOrdersUser from '../screens/DrawerNavigator/OrdersTapNavigator/User/FinishedOrders';

var check = false;
const DriverTabNavigator = createMaterialTopTabNavigator({
  NewOrdersDriver,
  FinishedOrdersDriver,
});

// const UserTabNavigator = createMaterialTopTabNavigator({
//   NewOrders: {
//     screen: NewOrdersUser
//   },
//   CurrentOrders: {
//     screen: CurrentOrdersUser
//   },
//   FinishedOrders: {
//     screen: FinishedOrdersUser
//   },
// });

export default createAppContainer(DriverTabNavigator);