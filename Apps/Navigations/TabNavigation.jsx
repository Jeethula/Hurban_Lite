import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import Color from '../Utils/Color';
import HomeNavigation from './HomeNavigation';


const Tab = createBottomTabNavigator();

export default function TabNavigation () {
 
    return (
     <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Color.PRIMARAY
     }}>
        <Tab.Screen name='home' component={HomeNavigation}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Home
                </Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome5 name="home" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='Booking' component={BookingScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Booking
                </Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome5 name="bookmark" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Profile
                </Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome5 name="user-circle" size={size} color={color} />
            )
        }}
        />
     </Tab.Navigator>
    )
  }

