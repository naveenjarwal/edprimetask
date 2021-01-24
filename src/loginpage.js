/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
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
  AsyncStorage,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const App=(props) => {
    const navigation = useNavigation();
    const [data, setdata] = useState({});
    const [username, setusername] = useState();
    const [userpassword, setuserpassword] = useState();
    const [firstname, setfirstname] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {
       console.log(props.route.params)
       setdata(props.route.params)
        
        // setfirstname(props.route.params.first)
        // setpassword(props.route.params.pass)
      });
    

  return (
   <View style={styles.mainContainer}>
     <Text style={styles.textHeader}>LOGIN PAGE </Text>
     <View style={styles.inputBoxContainer}>
      <TextInput
      style={styles.inputBox}
      placeholder="User Name"
      onChangeText={text => setusername(text)}
      value={username}
      />
      <TextInput
      style={styles.inputBox}
      placeholder="Password"
      onChangeText={text => setuserpassword(text)}
      value={userpassword}
      />  
      </View>
       <View style={{flex:0.20}}>
         <Button
     
         onPress={()=>{ props.route.params==undefined ? Alert.alert("Worng user name and password") : (username !==data.first || userpassword !==data.pass) ? Alert.alert("Please signup"): navigation.navigate("Home",{mydata:data})} }
  
         title='LOGIN'
         />
         </View>
         <View style={{flexDirection:'row'}}>
           
             <Text>
              You Don't Have Any Account?  
             </Text>
             <TouchableOpacity onPress={()=> {navigation.navigate('Signup')}}>
             <Text style={{color:'blue'}}>   SIGNUP</Text>
            </TouchableOpacity>
         </View>
   </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  },
  textHeader:{
    fontSize:30,
    fontWeight:'bold',
    color:'blue',
    alignItems:'center'
  },
  inputBoxContainer:{
    flex:0.50,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    width:'90%'
  },
  inputBox:{
    borderWidth:1,
    width:'90%',
    borderRadius:10
  }
});

export default App;
