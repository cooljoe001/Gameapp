import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from "expo-linear-gradient"

export default function App() {
  return(
   <LinearGradient  colors={["#402E7A","##ddb30f"]} style={styles.rootScreen}>
     <StartGameScreen />
 
   </LinearGradient>

      
  )
};

const styles = StyleSheet.create({
  rootScreen: {
  flex:1
  },
  backgroundImage: {
   opacity:0.15
  }
  
   
});
