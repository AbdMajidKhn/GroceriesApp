import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useState} from "react";
import constants from "../constant/constants";

import {
    View,
    Text, 
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from "react-native";



const SignUpScreen = ({navigation}) => {
    const [Fname,setFname]=useState('');
    const[Lname,setLname]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[rePassword,setRePassword]=useState('');
    const storeData=async(key,value)=>{
        try{
            await AsyncStorage.setItem(key,value)
        }catch(e){
            //savingerror
            Alert.alert('Unknown Error')
        }
    }
    const doSignUp=()=>{
        if(Fname.trim()==''){
            Alert.alert("Please Enter First Name")
            return;
        }
        
            if(Lname.trim()==''){
                Alert.alert("Please Enter last Name")
                return;
            }
            
                if(email.trim()==''){
                    Alert.alert("Please Enter email")
                    return;
                }
                
                    if(password.trim()==''){
                        Alert.alert("Please Enter password")
                        return;
                    }
                    
                        if(rePassword.trim()==''){
                            Alert.alert("Please Enter rePassword")
                            return;
                        }
                        storeData(constants.KFname,Fname);
                        storeData(constants.KLname,Lname);
                        storeData(constants.Kemail,email);
                        storeData(constants.Kpassword,password);
             
                
navigation.pop();
    
    }
    return(
        <View style={{flex: 1}}>

        
        <ImageBackground source={require('../assets/leaves.jpg')} style={{height:"100%", width: "100%"}}>
        
        <View style={{alignItems: 'center', width: 400}}>
            <Text style={{fontSize: 64, color:"white", fontWeight: '400', marginVertical: 10}}>Let's SignUp</Text>  
        </View>

        <View style={{backgroundColor: "white", height: 700, borderTopLeftRadius: 125, paddingBottom: 70, justifyContent:'center',}}>
            <Text style={{fontSize: 35, color: "#006A42", fontWeight: 'bold', textAlign: 'center'}}>Welcome Back</Text>
            <Text style={{fontSize: 17, fontWeight: '600', color: "grey", textAlign: 'center'}}>SignUp To Your Account </Text>

            <TextInput style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42", marginTop: 20,marginStart:20,marginEnd:20,textAlign:'center'}}
            placeholder = "Enter Your First Name"
            value={Fname}
            onChangeText={setFname}
            placeholderTextColor = 'white' />

            <TextInput style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42", marginTop: 20, marginStart:20,marginEnd:20,textAlign:'center'}}
            placeholder = "Enter Your Last Name"
            value={Lname}
            onChangeText={setLname}
            placeholderTextColor = 'white' />
            
            <TextInput style={{borderRadius: 200, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42", marginTop: 20, marginStart:20,marginEnd:20,textAlign:'center' }}
            placeholder = "Please Enter Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor = 'white' />

            <TextInput style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42",  marginTop: 20, marginStart:20,marginEnd:20,textAlign:'center' }}
            placeholder = "Please Enter Your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholderTextColor = 'white' />

            <TextInput style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42", marginTop: 20, marginStart:20,marginEnd:20,textAlign:'center'}}
            placeholder = "Please ReEnter Your Password"
            value={rePassword}
            onChangeText={setRePassword}
            secureTextEntry={true}
            placeholderTextColor = 'white' />


            <TouchableOpacity onPress={doSignUp}>
            <Text style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42",  marginTop: 20, padding: 13, marginStart: 100, marginEnd:100,textAlign:'center'}}>
            SignUp
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {
                navigation.navigate('Login')
            }}>
                <View style={{margin: 10, flexDirection: "row", justifyContent: 'center'}}>
                <Text style={{color: "#006A42", fontWeight: "500", fontSize: 15}}>Already Have Account ? </Text>
                <Text style={{color: "#006A42",fontWeight: "bold", fontSize: 20, textDecorationLine: 'underline'}}>Login!</Text>
                </View>
                
            </TouchableOpacity>
</View>
</ImageBackground>
        </View>
    );
};

export default SignUpScreen;