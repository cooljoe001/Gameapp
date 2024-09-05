

import { Children } from "react";
import  {View,Text,Pressable,StyleSheet} from "react-native"

function PrimaryButton({children}) {
  function pressHandler(){
  console.log("do something")
  }
  return (
    <View style={styles.btnOuterContainer}>
    <Pressable style={({pressed})=>pressed ? [styles.btnInnerContainer,styles.pressed]  : styles.btnInnerContainer} onPress={pressHandler} android_ripple={{color:"#604CC3"}}>

        <Text style={styles.buttonText}>
            {children}
        </Text>
    </Pressable>
    </View>
 
  
  )
}
export default  PrimaryButton;


const styles = StyleSheet.create({
  btnOuterContainer:{
    borderRadius:28,
    margin:4,
    overflow:"hidden"
  },
  btnInnerContainer:{
    backgroundColor:"#B1AFFF",
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
  },
  buttonText: {
 color:"white",
 textAlign:"center"
  },
  pressed:{
    opacity:0.75
  }
})


