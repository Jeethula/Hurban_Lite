import { FlatList, Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import Heading from '../../Components/Heading'
import GlobalAPi from '../../Utils/GlobalAPi'
import { useState } from 'react'
import BusinessListItemSmall from './BusinessListItemSmall'

export default function BusinessList (){

    const [businessList, setbusinessList] = useState([])

    useEffect(()=>{
        getBusinessList()
    },[])

    const getBusinessList = () =>{

        GlobalAPi.getBusinessList().then(
            res=>{
                console.log(res);
                setbusinessList(res.businnesLists)
            }
        )
    }
 
    return (
      <View style={{marginTop:10}}>
        <Heading text={"Latest Business"} isViewAll={true}/>
        <FlatList 
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View style={{marginRight:10}}>
                <BusinessListItemSmall business={item}/>
            </View>
        )}
        />
      </View>
    )

  }
