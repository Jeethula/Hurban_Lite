import React, { Component, useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import Pageheading from '../../Components/Pageheading'
import GlobalAPi from '../../Utils/GlobalAPi'
import { useUser } from '@clerk/clerk-expo';
import { useState } from 'react';
import BusinessListItem from '../BusinessListByCategory/BusinessListItem';
import Color from '../../Utils/Color';

export default function BookingScreen (){

    const {user}=useUser();

    const [BookingList, setBookingList] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        user && getUserBookings()
    },[user])

    const getUserBookings = () =>{
      setloading(true)
      GlobalAPi.getUserBookings(user.primaryEmailAddress.emailAddress).then(
        res=>{
          console.log(res)
          setBookingList(res.bookings)
          setloading(false)
        }
      )
    }

    return (
      <View style={{padding:10}}>
        <Pageheading title={"My Bookings"}/>
        <View>
         {BookingList.length>0 ? <FlatList
            data={BookingList}
            onRefresh={()=>getUserBookings()}
            refreshing={loading}
            
            renderItem={({item,index})=>(
              <BusinessListItem business={item?.businnesLists[0]} booking={item}  />
            )}
          />: <Text style={{fontFamily:'outfit-medium',fontSize:20,color:Color.GREY,marginLeft:30,padding:20,alignContent:'center',marginTop:40}}>No Bookings Done 🙄</Text>}

        </View>
      </View>
    )
  }

