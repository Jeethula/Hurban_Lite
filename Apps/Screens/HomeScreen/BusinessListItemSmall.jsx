import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListItemSmall({business}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-detail',{business:business})}>
      <Image 
      source={{uri:business?.image[0]?.url}} 
      style={styles.image}
      />
      <View style={styles.infocontainer}>
            <Text style={{fontSize:17,fontFamily:'outfit-medium'}}>{business?.name}</Text>
            <Text style={{fontSize:13,fontFamily:'outfit-medium',color:Color.GREY}}>{business?.contactperson}</Text>
            <Text 
            style={{fontSize:10,
                   fontFamily:'outfit',
                   padding:3,
                   color:Color.PRIMARAY,
                   backgroundColor:Color.LIGHT_GRAY,
                   borderRadius:3,
                   paddingHorizontal:7,
                   alignSelf:'flex-start',


                   }}>{business?.category?.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image:{
    width:160,
    height:100,
    borderRadius:10
  },
  container:{
    padding:10,
    backgroundColor:Color.WHITE,
    borderRadius:10
  },
  infocontainer:{
    padding:7,
    display:'flex',
    gap:3
  }
})
