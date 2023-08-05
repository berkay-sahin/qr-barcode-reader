import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import jwt from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginPage, Scanner } from '../componenets';

export const Route = () => {
  const Tab = createBottomTabNavigator();

 


  return (
    <NavigationContainer>
       <Tab.Navigator
         initialRouteName= 'Home'
           screenOptions={({ route }) => ({
            tabBarIconStyle: { display: "none" },
            headerShown:false,
            tabBarStyle:{display:"flex"},
            tabBarActiveBackgroundColor:"#2D2A35",
            tabBarInactiveBackgroundColor:"#2D2A35",
            tabBarLabelStyle:{fontSize:16,color:"white",fontWeight:"bold", position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            textAlignVertical: 'center',}
            
        })}
       
          
 
      >
        
        <Tab.Screen  name="Login" component={LoginPage}   />
        <Tab.Screen name="Scanner" component={Scanner}    /> 
       
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};