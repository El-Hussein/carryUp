import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
class LoginDriver extends React.Component {
    constructor(){
      super();
      console.warn("lool");
    }
    render() {
      return (
        <SafeAreaView>
          <View style={{ height:'100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'red' }}>
            <Text>LoginDriver!</Text>
          </View>
        </SafeAreaView>
      );
    }
}
export default LoginDriver;