import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Apps/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Navigations/TabNavigation';
import { useFonts } from 'expo-font';



// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('../Newproject/assets/Fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../Newproject/assets/Fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../Newproject/assets/Fonts/Outfit-Bold.ttf'),
  });
  
  return (
    <ClerkProvider publishableKey='pk_test_Z2VudGxlLWhvZy0zNi5jbGVyay5hY2NvdW50cy5kZXYk'>
        {/* tokenCache={tokenCache} */}
     <View style={styles.container}> 
       <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        {/* <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer> */}
          <Login/>
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
});
