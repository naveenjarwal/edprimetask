import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Loginpage from './src/loginpage';
import Signup from './src/Signuppage';
import Dashboard from './src/Dashboard';
import Setting from './src/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home(props) {
  var homedata = props.route.params.mydata
  console.log("home",homedata)
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={()=><Dashboard abc={homedata}/>}  />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loginpage" component={Loginpage}  {...props}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Home" component={Home}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}