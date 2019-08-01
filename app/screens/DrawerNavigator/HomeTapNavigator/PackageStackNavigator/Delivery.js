import React from 'react';
import { Text, View } from 'react-native';
class Delivery extends React.Component {
    render() {
      alert("arrived Here?")
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Delivery!</Text>
        </View>
      );
    }
}
export default Delivery;