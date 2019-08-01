import React from 'react';
import { Text, View } from 'react-native';
class Profile extends React.Component {
  constructor(){
    super();
  }
  render() {
    alert("hi")
      return (
        <View style={{ height:'100%', width:'100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
        </View>
      );
    }
}
export default Profile;