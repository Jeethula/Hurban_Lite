import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import GlobalAPi from '../../Utils/GlobalAPi'
import { useState } from 'react'
import Heading from '../../Components/Heading'
import Color from '../../Utils/Color'
import { useNavigation } from '@react-navigation/native'

export default function Category(){

    const [category, setcategory] = useState([])
    const navigation=useNavigation()

    useEffect(()=>{
        getCategory()
    },[])

    const getCategory = () =>{
        GlobalAPi.getCatogory().then(
            res=>{
                console.log(res)
                setcategory(res.categories)
            }
        )
    }
 
    return (
      <View style={{marginTop:10}}>
        <Heading text={"Categories"} isViewAll={true}/>
        <FlatList 
        data={category}
        numColumns={4}
        renderItem={({item,index})=>(
            <TouchableOpacity 
                 style={styles.container}
                 onPress={()=>navigation.push('business-list',{category:item.name})}
                 >
                <View style={styles.iconcontainer}>
                    <Image 
                    source={{uri:item?.icon?.url}} 
                    style={{width:30,height:30}}
                    />
                </View>
                <Text style={{fontFamily:'outfit-medium',marginTop:5}}>{item?.name}</Text>
            </TouchableOpacity>
        )}
        />
      </View>
    )
  
}

const styles = StyleSheet.create({
  iconcontainer:{
    backgroundColor:Color.LIGHT_GRAY,
    padding:10,
    borderRadius:99
  },
  container:{
    flex:1,
    alignItems:'center'
  }
})
