import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalAPi from '../../Utils/GlobalAPi';
import { useState } from 'react';
import BusinessListItem from './BusinessListItem';
import Color from '../../Utils/Color';
import Pageheading from '../../Components/Pageheading';

export default function BusinessListByCategory() {

    const param=useRoute().params
    const navigation=useNavigation()
    useEffect(()=>{
       param && getBusinessCategory()
    },[param])

    const [businessList, setbusinessList] = useState([])

    const getBusinessCategory=()=>{
      GlobalAPi.getBusinessListByCatagory(param.category).then(
        res=>{
          console.log(res.businnesLists,"categoryList")
          setbusinessList(res.businnesLists)
        }
      )
    }
  return (
    <View style={{padding:20,paddingTop:30}}>
      {/* <TouchableOpacity 
      style={{display:'flex',flexDirection:'row',gap:20,alignItems:'center'}}
      onPress={()=>navigation.goBack()}
      >     
       <Ionicons name="arrow-back-outline" size={24} color="black" />
       <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>{param?.category}</Text>
      </TouchableOpacity> */}
      <Pageheading title={param?.category}/>
     { businessList?.length>0 ? <FlatList
        data={businessList}
        style={{marginTop:15}}
        renderItem={({item,index})=>(
          <BusinessListItem business={item}/>
        )}
      />  :
        <Text style={{fontFamily:'outfit-medium',fontSize:20,marginTop:'20%',color:Color.GREY,textAlign:'center'}}> 
          No Business Found
        </Text> }
    </View>
  )
}