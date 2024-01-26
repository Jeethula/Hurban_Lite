import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Color from '../../Utils/Color'
import * as WebBrowser from "expo-web-browser"
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../../Apps/hooks/warmUpBrowser";


WebBrowser.maybeCompleteAuthSession();

export default function Login() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

      const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{alignItems:'center'}}>
        <Image source={require('../../../assets/images/login.png')} 
                   style={styles.loginImage}
        />
        <View style={styles.subContainer}>
            <Text style={{fontSize:27,color:Color.WHITE,textAlign:'center'}}>
                Lets find 
               <Text style={{fontWeight:'bold'}}> profesional Cleaning and repair </Text> 
                Service
            </Text>
            <Text style={{fontSize:17,color:Color.WHITE,textAlign:'center',marginTop:20}}>
                Best app to find your service near you
            </Text>
            <TouchableOpacity style={styles.button}
            onPress={onPress}
            >
                <Text style={{textAlign:'center',fontSize:17,color:Color.BLACK}}>
                    Lets get stated
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    width:200,
    height:450,
    marginTop:70,
    borderWidth:4,
    borderColor:Color.BLACK,
  },
  subContainer:{
    width:'100%',
    backgroundColor:Color.PRIMARAY,
    height:'70%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
  },
  button:{
        padding:15,
        backgroundColor:Color.WHITE,
        borderRadius:99,
        marginTop:40
  }
})


