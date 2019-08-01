import React from 'react';
import { Text, View } from 'react-native';
class LoginUser extends React.Component {
    render() {
      alert("user login");
      return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text>LoginUser!</Text>
        </View>
      );
    }
}
export default LoginUser;