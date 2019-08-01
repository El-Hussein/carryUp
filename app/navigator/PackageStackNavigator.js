import { 
    createStackNavigator, 
} from 'react-navigation';


import Package from '../screens/DrawerNavigator/HomeTapNavigator/PackageStackNavigator/Package';
import Reciept from '../screens/DrawerNavigator/HomeTapNavigator/PackageStackNavigator/Reciept';
import Delivery from '../screens/DrawerNavigator/HomeTapNavigator/PackageStackNavigator/Delivery';
import Summary from '../screens/DrawerNavigator/HomeTapNavigator/PackageStackNavigator/Summary';

const PackageStack = createStackNavigator(
    { 
        Package: Package, 
        Reciept: Reciept, 
        Delivery: Delivery, 
        Summary: Summary, 
    },
    {
        navigationOptions:{
            header:null,
        }
    }
);

export default PackageStack;