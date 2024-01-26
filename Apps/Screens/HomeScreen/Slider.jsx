import { FlatList, Image, Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import GlobalAPi from '../../Utils/GlobalAPi'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import Heading from '../../Components/Heading'

export default function Slider (){

    const [slider, setslider] = useState([])
    useEffect(()=>{
            getSlider()
    },[])    
    const getSlider = () =>{

        GlobalAPi.getSlider().then(
            res => {console.log("res",res.sliders)
            setslider(res?.sliders)
     })
    }

    return (
      <View>
        <Heading text={"Offers for you"}/>
        <FlatList 
            data={slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <View style={{marginRight:20}}>
                    <Image 
                      source={{uri:item?.image?.url}}
                      style={styles.sliderimage}
                    />
                </View>
            )}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({

    sliderimage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:"contain"
    }
  })
  
