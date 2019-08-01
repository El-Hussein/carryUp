import React from 'react';
import { Text, View } from 'react-native';
class FinishedOders extends React.Component {
    
  static navigationOptions = {
    tabBarLabel: <Text style={{fontSize:20}}> {localization.finishedOders} </Text>,
  };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>FinishedOdersDriver!</Text>
        </View>
      );
    }
}
export default FinishedOders;