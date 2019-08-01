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
import Menu from '../assets/images/menu.png';
import Back from '../assets/images/back.png';

export const StepNum = ({number, color, title}) => {
    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={{backgroundColor:color, width:wp('5.5%'), height:wp('5.5%'), borderRadius:wp('2.75%'), justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:wp('3%')}}> {number} </Text>
            </View>
            <Text style={{color:(color=='#3A66B7')?'black':color, fontSize:wp('4%'), marginTop:wp('0.5%')}}> {title} </Text>
        </View>
    )
}

