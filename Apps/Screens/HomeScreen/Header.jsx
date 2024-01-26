import { useUser } from '@clerk/clerk-expo'
import React, { Component } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native'
import Color from '../../Utils/Color'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header (){

    const {user,isLoading }=useUser()

    return (
      <View style={styles.container}>
        {/* profile section */}
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
         <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
         <View>
            <Text style={{color:Color.WHITE,fontFamily:'outfit'}}> Welcome, </Text>
            <Text style={{color:Color.WHITE,fontSize:20,fontFamily:'outfit-medium'}}> {user?.fullName} </Text>
         </View>
        </View> 
        <FontAwesome5 name="bookmark" size={27} color="white" />
        </View>
        {/* searchbar */}
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='search ' style={styles.textinput}/>
            <FontAwesome5 name="search" size={24} color={Color.PRIMARAY} style={styles.searchButton} />
        </View>

      </View>
    )
  }

  const styles = StyleSheet.create({
    userImage:{
        width:45,
        height:45,
        borderRadius:99,
    },
    searchButton:{
        backgroundColor:Color.WHITE,
        padding:10,
        borderRadius:8
    },
    searchBarContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10
    },
    textinput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Color.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16

    },
    container:{
        padding:15,
        paddingTop:30,
        backgroundColor:Color.PRIMARAY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        gap:10
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
    }

  })
  

