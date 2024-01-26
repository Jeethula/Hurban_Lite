import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import BusinessList from './BusinessList'

export default function HomeScreen () {

    return (
      <View>
        <Header/>
        <View style={{padding:10}}>
          <Slider/>
          <Category />
          <BusinessList />
        </View>
        
      </View>
    )
  }
