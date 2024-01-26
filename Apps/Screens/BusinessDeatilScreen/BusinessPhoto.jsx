import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function BusinessPhoto({business}) {
  return (
    <View style={{marginLeft:10,marginBottom:20}}>
      <Heading text={'Photos'}/>
      <FlatList
      data={business.image}
      renderItem={({item})=>(
        <Image
            source={{uri:item.url}}
            style={{width:'80%',height:120,borderRadius:20}}
        />
      )}
      />
    </View>
  )
}