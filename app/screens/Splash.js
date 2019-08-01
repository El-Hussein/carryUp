import React, {Component} from 'react'
import {
    ImageBackground,
    Image,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Splash from '../assets/images/splash.png';
// import Indicator from '../assets/images/Indicator.png';
import Logo from '../assets/images/logo.png';

class SplashScreen extends Component{

    constructor(props) {
         super()
    }
    
    render () {
         return (
            <ImageBackground source={Splash}  style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                justifyContent:'center',
                alignItems:'center',
              }}>
                {/* <Image source={Indicator} style={{width:wp('7%'), height:wp('7%'), position:'absolute', top:hp('40%'), left:wp('46.5%')}}/> */}
                <Image source={Logo} style={{width:wp('80%'), height:wp('50%'), resizeMode:'contain', position:'absolute'}}/>
            </ImageBackground>
         )
    }
}

export default SplashScreen