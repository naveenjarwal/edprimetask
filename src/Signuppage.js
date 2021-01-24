/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  AsyncStorage 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App=({navigation}) => {

//const [data, setdata] = useState([]);
const [firstName, setfn] = useState();
const [lastName, setln] = useState();
const [OrganigationName, seton] = useState();
const [Email, sete] = useState();
const [Password, setp] = useState();

const _storeData = async () => {
    
   
      navigation.navigate('Loginpage',{first:firstName,last:lastName,organ:OrganigationName,email:Email,pass:Password})
  
  };

  return (
   <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
     <Text style={{fontSize:30,fontWeight:'bold',color:'blue',alignItems:'center'}}>SIGNUP PAGE</Text>
     <View style={{flex:0.80,flexDirection:'column',justifyContent:'space-around',alignItems:'center',width:'90%'}}>
      <TextInput
      style={{borderWidth:1,width:'90%',borderRadius:10}}
      placeholder="First Name"
      onChangeText={text => setfn(text)}
      value={firstName}
      />
      <TextInput
      style={{borderWidth:1,width:'90%',borderRadius:10}}
      placeholder="Last Name"
      onChangeText={text => setln(text)}
      value={lastName}
      />  
       <TextInput
      style={{borderWidth:1,width:'90%',borderRadius:10}}
      placeholder="Organigation Name"
      onChangeText={text => seton(text)}
      value={OrganigationName}
      />  
       <TextInput
      style={{borderWidth:1,width:'90%',borderRadius:10}}
      placeholder="E-mail Address"
      onChangeText={text => sete(text)}
      value={Email}
      />  
       <TextInput
      style={{borderWidth:1,width:'90%',borderRadius:10}}
      placeholder="Password"
      onChangeText={text => setp(text)}
      value={Password}
      />  
      </View>
       <View style={{flex:0.20}}>
         <Button
         onPress={()=>{_storeData()}}
         title='Sign up'
         />
         </View>
        
   </View>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
