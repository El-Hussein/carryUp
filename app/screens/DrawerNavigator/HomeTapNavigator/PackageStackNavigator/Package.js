import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Header} from '../../../../components/Header';
import {StepNum} from '../../../../components/Steps';
import localization from '../../../../localization/localization';
import { RadioButton } from '../../../../components/RadioButton';

import cam from '../../../../assets/images/cam.png';
import { VehicleType, TreatmentType } from '../../../../components/VehiclesType';


import motorbike from '../../../../assets/images/motorbike.png';
import truck from '../../../../assets/images/truck.png';
import tank from '../../../../assets/images/tank.png';
import dayana from '../../../../assets/images/dayana.png';

import envelope from '../../../../assets/images/envelope.png';
import breakable from '../../../../assets/images/breakable.png';
import cold from '../../../../assets/images/cold.png';
import preserve from '../../../../assets/images/preserve.png';
import help from '../../../../assets/images/help.png';


class Package extends React.Component {
    static navigationOptions = {
      header: null,
    }
    render() {
      return (
        <ScrollView>
          
          <Header title={localization.package}/>
          <View  style={{marginHorizontal:wp("10%")}}>
            <View style={{justifyContent:'space-between', alignItems:'center', marginTop:hp('1.5%'), flexDirection:'row'}}>
            <View style={{backgroundColor:'#C4C4C4', height:hp('0.1%'), width:wp('75%'), position:'absolute', top:wp('2.5%'), left:wp('2.5%'), zIndex:-1}} />
              <StepNum number={4} color="#C4C4C4" title={localization.package}/>

              <StepNum number={3} color="#C4C4C4" title={localization.package}/>

              <StepNum number={2} color="#C4C4C4" title={localization.package}/>

              <StepNum number={1} color="#3A66B7" title={localization.package}/>
            </View>

            <Text style={{fontSize:wp('5%'), marginVertical:wp('1%'), color:'#3A66B7'}}> {localization.packageDetails} </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <TouchableOpacity style={{borderColor:'#3A66B7', borderWidth:wp('0.3%'), height:hp('11%'), borderRadius:wp('1.5%'), justifyContent:'center', alignItems:'center', width:wp('19%')}}>
                <Image source={cam} style={{width:wp('8%'), height:wp('10%'), resizeMode:'contain'}}/>
              </TouchableOpacity>
              <View style={{borderColor:'#3A66B7', borderWidth:wp('0.3%'), height:hp('11%'), borderRadius:wp('1.5%'), justifyContent:'center', alignItems:'center', width:wp('59%')}}>
                <TextInput 
                  placeholder="محتويات شقه 4 غرف و2 مطبخ"
                  textAlign='right'
                  />
                  <View style={{flexDirection:'row', margin:wp('1%'), width:wp('45%'), justifyContent:'space-between'}}>
                    <RadioButton title={localization.ship} colorActive="#81E021" isActive={false}/>
                    <RadioButton title={localization.transport} colorActive="#81E021" isActive={true}/>
                  </View>
              </View>
            </View>
            <Text style={{fontSize:wp('5%'), marginVertical:wp('1%'), color:'#3A66B7'}}> {localization.notes} </Text>
            <View style={{borderColor:'#3A66B7', borderWidth:wp('0.3%'), height:hp('9%'), borderRadius:wp('1.5%'), justifyContent:'center', alignItems:'center', width:wp('80%')}}>
              <TextInput 
                placeholder="في حاله الشحن الخارجي نرجو تحديد الدوله والميناء في الملاحظات"
                textAlign='right'
                style={{width:wp('75%'), maxHeight:hp('8%')}}
                multiline={true}
                />
            </View>

            <Text style={{fontSize:wp('5%'), marginVertical:wp('1%'), color:'#3A66B7'}}> {localization.whatUWant} </Text>
            <View style={{borderColor:'#3A66B7', borderWidth:wp('0.3%'), height:hp('6%'), borderRadius:wp('1.5%'), justifyContent:'center', paddingHorizontal:wp('2%'), alignItems:'flex-end', width:wp('80%')}}>
                <View style={{flexDirection:'row', margin:wp('1%'), width:wp('40%'), justifyContent:'space-between'}}>
                  <RadioButton title={localization.shared} colorActive="#81E021" isActive={false}/>
                  <RadioButton title={localization.private} colorActive="#81E021" isActive={true}/>
                </View>
            </View>

            <Text style={{fontSize:wp('5%'), marginVertical:wp('1%'), color:'#3A66B7'}}> {localization.vehicleType} </Text>
            <View style={{borderColor:'#3A66B7', borderWidth:wp('0.3%'), height:hp("18%"), borderRadius:wp('1.5%'), justifyContent:'center', paddingHorizontal:wp('2%')}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <TouchableOpacity>
                    <VehicleType isActive={false} image={truck} title={localization.truck}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <VehicleType isActive={false} image={dayana} title={localization.dayana}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <VehicleType isActive={false} image={tank} title={localization.tank}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <VehicleType isActive={true} image={motorbike} title={localization.motorbike}/>
                  </TouchableOpacity>
                </View>
                <View>
                  
                </View>
            </View>
            
            <Text style={{fontSize:wp('5%'), marginVertical:wp('1%'), color:'#3A66B7'}}> {localization.packageTreatment} </Text>
            <View style={{borderColor:'#3A66B7', borderWidth:wp('0.3%'), flexDirection:'row', height:hp("12%"), borderRadius:wp('1.5%'), justifyContent:'space-between', paddingHorizontal:wp('2%'), alignItems:'center'}}>
              <TouchableOpacity>
                <TreatmentType isActive={false} image={help} title={localization.help}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <TreatmentType isActive={false} image={preserve} title={localization.preserve}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <TreatmentType isActive={false} image={cold} title={localization.cold}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <TreatmentType isActive={true} image={breakable} title={localization.breakable}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <TreatmentType isActive={false} image={envelope} title={localization.envelope}/>
              </TouchableOpacity>
            </View>
          </View>


        </ScrollView>
      );
    }
}
export default Package;