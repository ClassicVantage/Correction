
import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class HomeScreen extends Component {
    UserSignUp=(emailId,password)=>{
firebase.auth().createUserWithEmailAndPassword(emailId,password)
.then((response)=>{
    return Alert.alert("U got added now give treat")
})
.catch(function(error){
var ErrorCode=error.code;
var ErrorMessage=error.message;
return Alert.alert(ErrorMessage)
})
UserLogIn=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then((response)=>{
        return Alert.alert("Signed In successfully, you have -Yoda")
    })
    .catch(function(error){
    var ErrorCode=error.code;
    var ErrorMessage=error.message;
    return Alert.alert(ErrorMessage)
    })
    

    }
render(){
    return(
        <View>
            <TextInput
            style={style.InputBox}
            placeholder='TinyTintin@pooopaaa.com'
            keyBoardType='email-address'
            onChangeText={(text)=>{
                this.setState({
                    emailId: text 
                })
            }}
            />
            <TextInput
            style={style.InputBox}
            secureTextEntry={true}
            placeHolder='POOOPOOOPAAAPAAA'
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            />
            <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId,this.state.password)}}
            >
            <Text>KRIPYA KARUN LOGIN KARA BUN</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Styles.button}
            onPress = {()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
                <Text>Sign Up</Text>

            </TouchableOpacity>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1f3c88'
    },
    profileContainer:{
        flex:1,
        justifyContent :'center',
        alignItems:'center', 
        borderRadius 
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00',
        color : '#ff3d00'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        BorderColor: '#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }

})