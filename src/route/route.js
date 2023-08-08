import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import jwt from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginPage, Scanner, TestPage } from '../componenets';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';

export const Route = () => {
  const Tab = createBottomTabNavigator();




  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { height:70,paddingBottom:-30},
          tabBarActiveBackgroundColor: "#2D2A35",
          tabBarInactiveBackgroundColor: "#2D2A35",
          tabBarLabelStyle: {
            display:"none",
          }

        })}



      >

        <Tab.Screen name="Login" component={LoginPage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center"}}>
              <Text style={{color:"white"}}>asgs90gj0sag</Text>
             
            </View>
          )
        }} 
        />
        <Tab.Screen name="Scanner" component={Scanner} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center",bottom:30,backgroundColor:"#474747",borderRadius:35,width:70,height:70}}>
              <Image source={require('../../assets/camera.png')} resizeMode='contain' style={{tintColor:focused?"#e32f45":"#748c94", width: 35, height: 35,top:15 }} />
             
            </View>
          )
        }} />
       <Tab.Screen name="Test" component={TestPage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center",width:64,height:64}}>
              <Image source={require('../../assets/clipboard.png')} resizeMode='contain' style={{tintColor:focused?"#e32f45":"#748c94", width: 35, height: 35,top:15 }} />
             
            </View>
          )
        }} />

      </Tab.Navigator>
    </NavigationContainer>

  );
};