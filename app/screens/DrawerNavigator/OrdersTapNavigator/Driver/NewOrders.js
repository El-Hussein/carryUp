import React from 'react';
import { Text, View } from 'react-native';
import localization from '../../../../localization/localization';

class NewOrders extends React.Component {
    static navigationOptions = {
      tabBarLabel: <Text style={{fontSize:20}}> {localization.newOrders} </Text>,
    };

    render() {
      console.warn("loool")
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>NewOrders!</Text>
        </View>
      );
    }
}
export default NewOrders;