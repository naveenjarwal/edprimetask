/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const App: () => React$Node = (props) => {
    const navigation = useNavigation();
    useEffect(() => {
        console.log("dash",props)
        // setdata(props.route.params)
      });


  return (
   <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
     <Text >Setting</Text>
    
   </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
