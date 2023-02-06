import React from "react";
import {
    View,
    Text,
    ImageBackground,
    Image, 
    TouchableOpacity
} from "react-native";


const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        
        <ImageBackground source={require('../assets/leaves.jpg')} style={{height:"100%", width: "100%"}}>
        
        <View style={{margin: 20}}>
            <Text style={{fontSize: 64, color:"white", marginLeft: 25}}>Lets Start</Text>
            <Text style={{fontSize: 64, color:"white", marginLeft: 25}}>Coding</Text>
        </View>

        <TouchableOpacity onPress={() => {
            navigation.navigate('Login')
        }}
      
        style={{
          backgroundColor:'#2BB789', borderRadius:100, alignItems:'center', width:330,
          marginVertical:100, marginHorizontal:40, padding: 5, marginBottom: -70}}>
          <Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>Login</Text>
       
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => {
            navigation.navigate('SignUp')
        }}
      
      style={{
        backgroundColor:'#2BB789', borderRadius:100, alignItems:'center', width:330,
        marginVertical:100, marginHorizontal:40, padding: 5}}>

        <Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>SignUp</Text>
       
      </TouchableOpacity>
            

        </ImageBackground>
        </View>
    );
};

export default HomeScreen;