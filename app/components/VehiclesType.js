import React from 'react'

import {
    Image,
    StyleSheet,
    View,
    Text,
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RadioButton } from './RadioButton';



export const VehicleType = ({isActive, image, title}) => {
    return (
        <View style={[{justifyContent:'center', alignItems:'center'}, isActive?null:{opacity:0.6}]}>
            <Image source={image} style={{width:wp('12%'), height:wp('8%'), resizeMode:'contain'}}/>
            <Text style={{color:'white', borderRadius:wp('1%'), textAlign:'center', backgroundColor:'#3A66B7', width:wp('16%'), fontSize:wp('3.2%'), marginTop:wp('0.5%')}}> {title} </Text>
        </View>
    )
}

export const TreatmentType = ({isActive, image, title}) => {
    return (
        <View style={[{justifyContent:'center', alignItems:'center'}, isActive?null:{opacity:0.6}]}>
            <Image source={image} style={{width:wp('10%'), height:wp('8%'), resizeMode:'contain'}}/>
            <RadioButton isActive={isActive} size={wp("3%")} title={title}/>
        </View>
    )
}

