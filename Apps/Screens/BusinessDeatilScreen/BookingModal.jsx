import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Color from '../../Utils/Color';
import Heading from '../../Components/Heading';
import { useState } from 'react';
import GlobalAPi from '../../Utils/GlobalAPi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment/moment';

export default function BookingModal({businessid,hideModel}) {

    const [timeList, setTimeList] = useState()
    const [selectedTime,setSelectedTime]= useState()
    const [selectedDate,setSelectedDate]= useState()
    const [note,setNote]= useState("")
    const {user}=useUser()

    useEffect(()=>{
        getTime()
    },[])

    getTime=()=>{
        const TimeList=[]
        for(let i=8;i<12;i++){
            TimeList.push({
                time:i+':00 Am'
            })
            TimeList.push({
                time:i+':30 Am'
            })
        }
        for(let i=1;i<7;i++){
            TimeList.push({
                time:i+':00 Pm'
            })
            TimeList.push({
                time:i+':30 Pm'
            })
        }
        setTimeList(TimeList)
    }

    const createBooking = ()=>{
        if(!selectedDate||!selectedTime){
            ToastAndroid.show('Please Select date and time',ToastAndroid.LONG)
            return
        }
        const data={
            userName:user.fullName,
            userEmail:user.primaryEmailAddress.emailAddress,
            time:selectedTime,
            date:moment(selectedDate).format('DD-MMM-yyyy'),
            businessId:businessid
        }
        GlobalAPi.CreateBooking(data).then(
            res=>{
                console.log(res,"booking created")
                ToastAndroid.show('Booking Created Sucessfully',ToastAndroid.LONG)
                hideModel()
            }
        )
    }

  return (
    <ScrollView style={{padding:20}}>
      <TouchableOpacity 
      style={{display:'flex',flexDirection:'row',gap:20,alignItems:'center',marginBottom:20}}
      onPress={()=>hideModel()}
      >     
       <Ionicons name="arrow-back-outline" size={24} color="black" />
       <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>Bookings</Text>
      </TouchableOpacity>

      {/* CalendarPicker */}
      <Heading text={'Select Date'}/>
      <View style={styles.calCon}>
      <CalendarPicker
         onDateChange={setSelectedDate}
         width={340}
         minDate={Date.now()}
         todayBackgroundColor={Color.BLACK}
         todayTextStyle={{color:Color.WHITE}}
         selectedDayColor={Color.PRIMARAY}
         selectedDayTextColor={Color.WHITE}
         />
      </View>

      {/* time selection */}
      <View style={{marginTop:20}}>
        <Heading text={'Select Time Slot'}/>
       <FlatList
       data={timeList}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       renderItem={({item,index})=>(
            <TouchableOpacity 
              style={{marginRight:10,}} 
              onPress={()=>setSelectedTime(item.time)}
            >
                <Text style={[selectedTime==item.time?styles.selectedTime:styles.unselectedTime]}>{item.time}</Text>
            </TouchableOpacity>
       )}
      
       />
      </View>

      {/* note section */}

      <KeyboardAvoidingView style={{marginTop:10}}>
        <Heading text={'Any Suggestion Note :'}/>
        <TextInput 
        placeholder='Note' 
        style={styles.noteArea}
        numberOfLines={4}
        multiline
        onChange={(text)=>{setNote(text)}}
        />
      </KeyboardAvoidingView>

      {/* button */}

      <TouchableOpacity style={{marginTop:20}} onPress={()=>createBooking()}>
        <Text style={styles.conbutton}>Confirm & Book</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    calCon:{
        backgroundColor:Color.LIGHT_GRAY,
        padding:20,
        borderRadius:15
    },
    selectedTime:{
        padding:10,
        borderWidth:1,
        borderColor:Color.PRIMARAY,
        paddingHorizontal:18,
        borderRadius:99,
        color:Color.WHITE,
        backgroundColor:Color.PRIMARAY

    },
    unselectedTime:{
        padding:10,
        borderWidth:1,
        borderColor:Color.PRIMARAY,
        paddingHorizontal:18,
        borderRadius:99,
        color:Color.PRIMARAY
    },
    noteArea:{
        borderWidth:1,
        borderRadius:15,
        textAlignVertical:'top',
        padding:20,
        fontSize:16,
        fontFamily:'outline-medium',
        borderColor:Color.PRIMARAY
    },
    conbutton:{
        textAlign:'center',
        fontFamily:'outfit-medium',
        fontSize:17,
        backgroundColor:Color.PRIMARAY,
        color:Color.WHITE,
        padding:10,
        borderRadius:99,
        elevation:2
    }
})
