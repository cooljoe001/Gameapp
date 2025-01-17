

import { TextInput,View,StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){

    return (
        <View style={styles.inputContainer}>
     <TextInput style={styles.numberInput} 
     maxLength={2}
      keyboardType="number-pad"
      autoCapitalize="none"
      autoCorrect={false}
      />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
        <PrimaryButton>Reset</PrimaryButton>
       </View>
      <View style={styles.btnContainer}>
      <PrimaryButton>Confirm</PrimaryButton>

      </View>

      </View>
    
        </View>

    )
    


}

const styles = StyleSheet.create({
    inputContainer :{
        justifyContent:"center",
        alignItems:"center",
        marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:"#402E7A",
        borderRadius: 8,
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25
    },
    numberInput:{
      height:50,
      width:50,
      fontSize:32,
      borderBottomColor:"#ddb30f",
      borderBottomWidth:2,
      color:"#ddb30f",
      marginVertical:8,
      textAlign:"center"
    }
    ,
    btnsContainer:{
        flexDirective:"row"
    },
    btnContainer:{
        flex:1
    }

})

export default StartGameScreen;
