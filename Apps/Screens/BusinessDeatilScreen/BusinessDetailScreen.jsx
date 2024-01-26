import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Color from '../../Utils/Color';
import Heading from '../../Components/Heading';
import BusinessPhoto from './BusinessPhoto';
import BookingModal from './BookingModal';


export default function BusinessDetailScreen() {

    const param=useRoute().params
    const [business, setbusiness] = useState(param.business)
    const [showModal, setshowModal] = useState(false)
    const [isReadmore,setisReadmore]=useState(false)
    const navigation=useNavigation()
    useEffect(()=>{
 
    },[])

    const onMessageClick=()=>{
      Linking.openURL('mailto:'+business?.email+"?subject:I am looking for your Service")
    }

  return business && (
    <View>
    <ScrollView style={{height:'91%'}}>
     <TouchableOpacity style={styles.backbuttonContainer} onPress={()=>navigation.goBack()}>
         <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <Image
        source={{uri:business?.image[0]?.url}}
        style={{width:'100%',height:300}}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontFamily:'outfit-bold',fontSize:25}}>{business?.name}</Text>
         <View style={styles.subcontainer}>
          <Text style={{fontFamily:'outfit-medium',fontSize:20,color:Color.PRIMARAY}}>{business?.contactperson} ⭐️</Text>
         </View>
        <Text style={{fontSize:15,fontFamily:'outfit',color:Color.GREY}}><Ionicons name="location-sharp" size={25} color={Color.PRIMARAY} />{business?.address}</Text>
      </View>

      {/* horizontalline */}
      <View style={{borderWidth:0.4,marginBottom:20,borderColor:Color.GREY}}></View>

      {/* about me */}
        <View style={{marginLeft:10}}>
            <Heading text={"About Me"}/>
            <Text style={{fontFamily:'outfit',color:Color.GREY,fontSize:16}} numberOfLines={isReadmore?7:4}>{business.about}</Text>
            <TouchableOpacity onPress={()=>setisReadmore(!isReadmore)}>
             <Text style={{fontFamily:'outfit',color:Color.PRIMARAY,fontSize:16}}>{isReadmore?"Read Less":"Read More"}</Text>
            </TouchableOpacity>
        </View>

          {/* horizontalline */}
      <View style={{borderWidth:0.4,marginBottom:20,borderColor:Color.GREY,marginTop:15}}></View>

      <BusinessPhoto business={business} />

    </ScrollView>
    <View style={{display:'flex',flexDirection:'row',margin:8,gap:5}}>
        <TouchableOpacity style={styles.message} onPress={()=>onMessageClick()}>
            <Text style={{fontFamily:'outfit-medium',fontSize:18,color:Color.PRIMARAY,textAlign:'center'}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.price} onPress={()=>setshowModal(true)}>
            <Text style={{fontFamily:'outfit-medium',fontSize:18,color:Color.WHITE,textAlign:'center'}}>Book Now</Text>
        </TouchableOpacity>
    </View>
    {/* booking modal */}
     <Modal
     visible={showModal}
     animationType='slide'
     >
      <BookingModal 
       businessid={business.id}
       hideModel={()=>setshowModal(false)}/>
     </Modal >
    </View>
  )
}

const styles = StyleSheet.create({
  backbuttonContainer:{
    position:'absolute',
    zIndex:10,
    padding:20
  },
  infoContainer:{
    padding:20,
    gap:7,
    display:'flex'
  },
  subcontainer:{
    display:'flex',
    flexDirection:'row',
    gap:4,
    alignItems:'center'
  },
  message:{
    padding:10,
    backgroundColor:Color.WHITE,
    borderWidth:1,
    borderRadius:99,
    borderColor:Color.PRIMARAY,
    flex:1

  },
  price:{
    padding:10,
    backgroundColor:Color.PRIMARAY,
    borderWidth:1,
    borderRadius:99,
    borderColor:Color.PRIMARAY,
    flex:1
  }
})
