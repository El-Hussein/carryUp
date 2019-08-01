import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Picker,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';
import localization from '../app/localization/localization';

import Logo from '../app/assets/images/logo.png';
import Name from '../app/assets/images/user.png';
import Email from '../app/assets/images/email.png';
import City from '../app/assets/images/city.png';
import Phone from '../app/assets/images/phone.png';
import Lock from '../app/assets/images/lock.png';
import ButtonBG from '../app/assets/images/button.png';

class Register extends Component{
    
    constructor(props) {
        super()
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            username:'',
            usernameError:false,
            email:'',
            emailError:false,
            phone:'',
            phoneError:false,
            country:'',
            countryError:false,
            city:'',
            cityError:false,
            address:'',
            addressError:false,
            password:'',
            passwordError:false,
            passwordConfirm:'',
            passwordConfirmError:false,
            photo:null,
            photoError:false,
            passwordMatch:null,
        }
    }

    validate(){
        error = false;
        if(!this.state.username){
            this.setState({
                usernameError:true
            })
            error = true;
        }else{
            this.setState({
                usernameError:false
            })
        }
        if(!this.state.email){
            this.setState({
                emailError:true
            })
            error = true;
        }else{
            this.setState({
                emailError:false
            })
        }
        if(!this.state.phone){
            this.setState({
                phoneError:true
            })
            error = true;
        }else{
            this.setState({
                phoneError:false
            })
        }
        if(!this.state.country){
            this.setState({
                countryError:true
            })
            error = true;
        }else{
            this.setState({
                countryError:false
            })
        }
        if(!this.state.city){
            this.setState({
                cityError:true
            })
            error = true;
        }else{
            this.setState({
                cityError:false
            })
        }
        if(!this.state.address){
            this.setState({
                addressError:true
            })
            error = true;
        }else{
            this.setState({
                addressError:false
            })
        }
        if(!this.state.password){
            this.setState({
                passwordError:true
            })
            error = true;
        }else{
            this.setState({
                passwordError:false
            })
        }
        if(!this.state.passwordConfirm){
            this.setState({
                passwordConfirmError:true
            })
            error = true;
        }else{
            this.setState({
                passwordConfirmError:false
            })
        }
        if(!this.state.ImageSource){
            this.setState({
                photoError:true
            })
            error = true;
        }else{
            this.setState({
                photoError:false
            })
        }
        if(this.state.password !== this.state.passwordConfirm){
            this.setState({
                passwordMatch:localization.confirmPasswordError
            })
            error = true;
        }else{
            this.setState({
                passwordMatch:null
            })
        }
        return error;
    }

    clearAdsForm(){
        this.setState({
            username:null,
            email:null,
            phone:null,
            country:'0',
            cities:'0',
            address:null,
            password:null,
            passwordConfirm:null,
            photo:null,
        })
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
    
        if (response.didCancel) {
            console.log('User cancelled photo picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };
    
            this.setState({
    
            ImageSource: source,
            data: response.data
    
            });
        }
        });
    }

    handleRegister(){
        if(this.validate()) return;
        data = {
            name:this.state.username,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password,
            country:this.state.country,
            city:this.state.city+'kkkkkk',
            address:this.state.address,
            image:this.state.ImageSource.uri,
        }
        // this.props.register(data);  
        // console.warn(this.props.auth)      
    }

    render () {
        const { ImageSource } = this.state
        return (
                
                <ScrollView style={{height:hp('90%'), backgroundColor:'white'}}>
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={Logo} style={styles.logo}/>
                </View>

                <View style={{marginHorizontal:wp('10%')}}>
                
                    {/* {this.props.auth.error?<Text style={{color:'red', textAlign:'center', textAlignVertical:'center', marginBottom:wp('1%'), fontSize:wp('4%')}}>{this.props.auth.error}</Text>:null}
                    {this.state.usernameError?<Text style={{color:'red', textAlign:'center', textAlignVertical:'center', marginBottom:wp('1%'), fontSize:wp('4%')}}>{localization.usernameError}</Text>:null} */}
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.userName}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="username"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(username) => this.setState({username})}
                        />
                        <Image source={Name} style={styles.image4_5}/>
                    </View>

                    {/* {this.state.emailError?<Text style={{color:'red', textAlign:'center', textAlignVertical:'center', marginBottom:wp('1%'), fontSize:wp('4%')}}>{localization.emailError}</Text>:null} */}
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.email}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="email"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(email) => this.setState({email})}
                        />
                        <Image source={Email} style={styles.image4_5}/>
                    </View>

                    {/* {this.state.addressError?<Text style={{color:'red', textAlign:'center', textAlignVertical:'center', marginBottom:wp('1%'), fontSize:wp('4%')}}>{localization.addressError}</Text>:null} */}
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.address}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="address"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(address) => this.setState({address})}
                        />
                        <Image source={City} style={styles.image4_5}/>
                    </View>

                    {/* {this.state.phoneError?<Text style={{color:'red', textAlign:'center', textAlignVertical:'center', marginBottom:wp('1%'), fontSize:wp('4%')}}>{localization.phoneError}</Text>:null} */}
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.phoneNumber}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(phone) => this.setState({phone})}
                        />
                        <Image source={Phone} style={styles.image4_5}/>
                    </View>

                    {/* {this.state.passwordError?<Text style={{color:'red', textAlign:'center', textAlignVertical:'center', marginBottom:wp('1%'), fontSize:wp('4%')}}>{localization.passwordError}</Text>:null} */}
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.password}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="password"
                            secureTextEntry={true}
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(password) => this.setState({password})}
                        />
                        <Image source={Lock} style={styles.image4_5}/>
                    </View>

                    {/* {this.state.passwordConfirmError?<Text style={{color:'red', textAlign:'center', textAlignVertical:'center', marginBottom:wp('1%'), fontSize:wp('4%')}}>{localization.passwordConfirmError}</Text>:null} */}
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={localization.confirmPassword}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="passwordConfirm"
                            secureTextEntry={true}
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
                        />
                        <Image source={Lock} style={styles.image4_5}/>
                    </View>

                    <View style={{justifyContent:'flex-start', alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.handleRegister()} style={{justifyContent:'center', alignItems:'center', width:wp('50%'), height:hp('8%')}}>
                            <Image source={ButtonBG} style={{width:wp('50%'), height:hp('8%'), right:wp('0%'), top:hp('0%'), resizeMode:'contain', justifyContent:'center', position:'absolute'}}/>
                            <View>
                                {false?<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}><ActivityIndicator/><Text style={styles.buttonText}> {localization.register} </Text></View>:<Text style={styles.buttonText}> {localization.register} </Text>}
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                </ScrollView>
            // </ImageBackground>
         )
    }

}

// function mapStateToProps(state) {
//     return {
//         auth: state.auth,
//         location: state.location,
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         ...bindActionCreators({ register, fetchCities }, dispatch)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Register)
export default Register;

const styles = StyleSheet.create({
    
    image4_5:{
        width:wp('4.5%'), 
        height:wp('4.5%'), 
        resizeMode:'contain'
    },
    logo:{
        width:wp('50%'), 
        height:hp('20%'), 
        margin:wp('3%'),
        resizeMode:'contain'
    },
    inputBorder:{
        backgroundColor:'rgba(255, 255, 255, 0.8)', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:wp('0.2%'), 
        borderRadius:wp('2%'), 
        borderColor:'#3A66B7', 
        marginBottom:hp('1.5%'), 
        paddingHorizontal:wp('2%')
    },
    textInput:{
        width:wp('70%'), 
        padding:0, 
        height:hp('5.8%'), 
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