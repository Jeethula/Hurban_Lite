import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default function Heading ({text,isViewAll=false}){

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{text}</Text>
       {isViewAll && <Text>View All</Text>}
      </View>
    )
  }

  const styles = StyleSheet.create({
    heading:{
      fontSize:20,
      fontFamily:'outfit-medium',
      marginBottom:7
    },
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
  
  })
