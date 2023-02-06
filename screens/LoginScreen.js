import React from "react";
import {
    View,
    Text, 
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Button
} from "react-native";



const LoginScreen = ({navigation}) => {
    return(
        <View style={{flex: 1}}>

        
        <ImageBackground source={require('../assets/leaves.jpg')} style={{height:"100%", width: "100%"}}>
        
        <View style={{alignItems: 'center', width: 400}}>
            <Text style={{fontSize: 64, color:"white", fontWeight: '400', marginVertical: 10}}>Let's Login</Text>  
        </View>

        <View style={{backgroundColor: "white", height: 700, width: 400, borderTopLeftRadius: 125, paddingTop: 100, alignItems: 'center'}}>
            <Text style={{fontSize: 35, color: "#006A42", fontWeight: 'bold'}}>Welcome Back</Text>
            <Text style={{fontSize: 17, fontWeight: '600', color: "grey"}}>Login To Your Account </Text>
            
            <TextInput style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42", paddingHorizontal: 100, marginTop: 30}}
            placeholder = "Please Enter Your Email"
            keyboardType="email-address"
            placeholderTextColor = 'white' />

            <TextInput style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42", paddingHorizontal: 65, marginTop: 30}}
            placeholder = "Please Enter Your Password"
            secureTextEntry={true}
            placeholderTextColor = 'white' />


            <TouchableOpacity >
            <Text style={{color: '#006A42', fontSize: 15, fontWeight: "500", flexDirection: 'row', marginTop: 15, marginLeft: 215}}>
            Forget Password ?
            </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=> {
                navigation.navigate('Products')
            }}>
            <Text style={{borderRadius: 100, backgroundColor: "#006A42", color: 'white', borderWidth: 1, 
            borderColor: "#006A42", paddingHorizontal: 30, marginTop: 30, padding: 10}}>
            Login
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {
                navigation.navigate('SignUp')
            }}>
                
                <View style={{margin: 30, flexDirection: "row", alignItems: 'center'}}>
                <Text style={{color: "#006A42", fontWeight: "500", fontSize: 15}}>Don't Have Account ? </Text>
                <Text style={{color: "#006A42",fontWeight: "bold", fontSize: 20, textDecorationLine: 'underline'}}>SignUp!</Text>
                </View>
                
            </TouchableOpacity>




            

        
    
            


            
        </View>

        

        

        </ImageBackground>
        </View>
    );
};

export default LoginScreen;