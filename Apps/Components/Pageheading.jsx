import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Pageheading({title}) {
    
    const navigation=useNavigation()
  return (
    <TouchableOpacity 
    style={{display:'flex',flexDirection:'row',gap:20,alignItems:'center'}}
    onPress={()=>navigation.goBack()}
    >     
     <Ionicons name="arrow-back-outline" size={24} color="black" />
     <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>{title}</Text>
    </TouchableOpacity>
  )
}