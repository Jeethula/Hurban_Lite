import { useClerk, useUser } from '@clerk/clerk-expo'
import React, { Component } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View ,Linking} from 'react-native'
import Color from '../../Utils/Color'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen (){

  const {user}=useUser()
  const { signOut } = useClerk();
  const navigation=useNavigation()

  const handleLogout = async () => {
    try {
      await signOut();
    
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const onMessageClick=()=>{
    Linking.openURL('mailto:jeeththenthar.la2022csec@sece.ac.in')
  }

  const profile=[
    {
      id:1,
      name:'Home',
      icon:'home'
    },{
      id:2,
      name:'My Bookings',
      icon:'bookmarks'
    },{
      id:3,
      name:'Contact Us',
      icon:'mail'
    },
    {
      id:4,
      name:'Logout',
      icon:'log-out'
    }
  ]

    return (
      <View>
      <View style={{padding:20,paddingTop:30,backgroundColor:Color.PRIMARAY}}>
        <Text style={{fontSize:30,fontFamily:'outfit-bold',color:Color.WHITE,marginLeft:-10}}>Profile</Text>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:20,backgroundColor:Color.PRIMARAY}}>
          <Image source={{uri:user.imageUrl}} style={{width:90,height:90,borderRadius:99}} />
          <Text style={{fontSize:26,fontFamily:'outfit-medium',color:Color.WHITE,marginTop:8}}>{user.fullName}</Text>
          <Text style={{fontSize:16,fontFamily:'outfit-medium',color:Color.WHITE,marginTop:8}}>{user.primaryEmailAddress.emailAddress}</Text>
        </View>
      </View>
        <View style={{paddingTop:30}}>
          <FlatList
           data={profile}
           renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>{
              if(item.name==="Home"){
                  navigation.navigate('home')
              }
              else if(item.name==="My Bookings"){
                navigation.navigate('Booking')
            }else if(item.name==="Contact Us"){
              onMessageClick()
          }else{
            console.log("logout")
            handleLogout()
        }
            }}
             style={{display:'flex',flexDirection:'row',alignItems:'center',gap:40,marginBottom:40,marginLeft:30}}>
              <Ionicons name={item.icon} size={35} color={Color.PRIMARAY} />
              <Text style={{fontFamily:'outfit-medium',fontSize:20}}>{item.name}</Text>
            </TouchableOpacity>
           )}
          />
          <Image  source={require('../../../assets/images/forProfile1.jpeg')} style={{width:'100%',height:180,borderRadius:25}}/>
        </View>
      </View>
    )
  }

