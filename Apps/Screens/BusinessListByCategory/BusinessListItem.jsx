import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function BusinessListItem({business,booking}) {
    const navigation=useNavigation()
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={()=>{booking?null:navigation.push('business-detail',{business:business})}}
      >
      <Image
        source={{uri:business?.image[0]?.url}}
        style={styles.image}
      />
      <View style={styles.subcontainer}>
        <Text style={{fontSize:15,fontFamily:'outfit',color:Color.GREY}}>{business.contactperson}</Text>
        <Text style={{fontSize:19,fontFamily:'outfit-bold',}}>{business.name}</Text>
        

        {booking?.id? 
  
          <View>

          <Text style={styles.booked}>{booking.bookingStatus}</Text>
          <Text style={styles.date}><FontAwesome5 name="calendar-check" size={24} color="black" />  {booking.date} at {booking.time}</Text>

          </View>

        :
        <Text style={{fontSize:16,fontFamily:'outfit',color:Color.GREY}}>
            <Ionicons name="location-sharp" size={19} color={Color.PRIMARAY} />
            {business.address}
        </Text>
        
        }

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image:{
    width:120,
    height:130,
    borderRadius:15
  },
  container:{
    padding:10,
    backgroundColor:Color.WHITE,
    borderRadius:15,
    marginBottom:15,
    display:'flex',
    flexDirection:'row',
    gap:10
  },
  subcontainer:{
    display:'flex',
    gap:8
  },
  booked:{
    backgroundColor:Color.GREEN,
    color:Color.WHITE,
    borderRadius:5,
    width:70,
    textAlign:'center',
    padding:2
  },
  date:{
    fontFamily:'outfit-medium',
    padding:10
  }
})
