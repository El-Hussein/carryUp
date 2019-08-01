import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
// import Header from '../components/Header';
import localization from '../../localization/localization';

import Logo from '../../assets/images/logo.png';
import ButtonBG from '../../assets/images/button.png';

class Terms extends Component{

    constructor(props) {
         super()
    }

    render () {
         return (
  
                <View style={{backgroundColor:'white', height:'100%'}}>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Image source={Logo} style={styles.logo}/>
                    </View>

                    <View style={{marginHorizontal:"10%" ,width:"80%", height:'50%', borderColor:"#A07532", borderRadius:wp('1.5%'), borderWidth:wp('0.2%')}}>

                    </View>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('0%')}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('50%'), height:hp('12%')}}>
                            <Image source={ButtonBG} style={{width:wp('50%'), height:hp('12%'), resizeMode:'contain', justifyContent:'center', position:'absolute'}}/>
                                <View>
                                <Text style={styles.buttonText}> {localization.agree} </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

         )
    }
}

export default Terms

const styles = StyleSheet.create({
    header:{
        height:hp('7%'),
        backgroundColor:"#A07532",
        justifyContent:'space-between',
        alignItems:'center',
        padding:wp('5%'),
        flexDirection:'row'
    },
    image4_5:{
        width:wp('4.5%'), 
        height:wp('4.5%'), 
        resizeMode:'contain'
    },
    rowCenter:{
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    textHeader:{
        color:'white', 
        fontSize:wp('4.5%'), 
        marginHorizontal:wp('3%'), 
        fontWeight:'bold'
    },
    image6_5:{
        width:wp('6.5%'), 
        height:wp('6.5%'), 
        resizeMode:'contain'
    },
    logo:{
        width:wp('56%'), 
        height:hp('15%'), 
        resizeMode:'contain',
    },
    inputBorder:{
        backgroundColor: 'rgba(255, 255, 255, 0.75)', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:wp('0.3%'), 
        borderRadius:wp('4%'), 
        borderColor:'#C8AF88', 
        marginBottom:hp('1%'), 
        paddingHorizontal:wp('2%')
    },
    textInput:{
        width:wp('70%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#A3A3A3'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('4.5%'), 
        fontWeight:'600'
    },
    pageBG:{
        flex: 1,
        resizeMode: 'stretch',
    }
});