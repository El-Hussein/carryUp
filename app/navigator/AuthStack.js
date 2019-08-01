import { 
    createStackNavigator, 
    createAppContainer 
} from 'react-navigation';

import LoginDriver from '../screens/AuthStack/Driver/Login';
import RegisterDriver from '../screens/AuthStack/Driver/Register';

import LoginUser from '../screens/AuthStack/User/Login';
import RegisterUser from '../screens/AuthStack/User/Register';

// user or driver?
var check = false;

const DriverAuthStack = createStackNavigator(
    { 
        Login: LoginDriver, 
        Register: RegisterDriver, 
    }
);

const UserAuthStack = createStackNavigator(
    { 
        Login: LoginUser, 
        Register: RegisterUser, 
    }
);

export default check? DriverAuthStack : UserAuthStack;
// export default DriverAuthStack;