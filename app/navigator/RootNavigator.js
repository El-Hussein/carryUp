import { 
    createSwitchNavigator, 
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';

import AuthStack from './AuthStack';
import Authload from '../screens/Authload';
import Splash from '../screens/Splash';
import DrawerNavigator from './DrawerNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    Authload: Authload,
    App: DrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
    navigationOptions:{
      header: null,
    }
  }
));