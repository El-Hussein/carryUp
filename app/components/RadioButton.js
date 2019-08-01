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

export const RadioButton = ({color="gray", colorActive="green", title, size = wp('4.5%'), isActive="false"}) => {
    return (
        <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
            <Text style={{color:(color=='#3A66B7')?'black':color, fontSize:wp('4%'), marginRight:wp('0.5%')}}> {title} </Text>
            <View style={{borderColor:color, borderWidth:wp('0.2%'), width:size, height:size, borderRadius:size/2, justifyContent:'center', alignItems:'center'}}>
                {isActive?<View style={{backgroundColor:colorActive, width:size-wp('2%'), height:size-wp('2%'), borderRadius:(size-wp('2%'))/2, justifyContent:'center', alignItems:'center'}}/>:null}    
            </View>
        </View>
    )
}

