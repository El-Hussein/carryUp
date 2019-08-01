import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
class Authload extends React.Component {
    componentDidMount(){
      // this.props.navigation.navigate("Auth");
    }
    render() {
      return (
        <View style={{ height:'100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{backgroundColor:'red'}}>Authload!</Text>
        </View>
      );
    }
}
export default Authload;