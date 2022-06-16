import { View, Text,StyleSheet,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const PolitiqueDeconfidentialité = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
            <Image style={{width : 161.55, borderRadius : 99,  alignSelf : "center",}}  source={require("./ImgRad.png")} />  
               <Image source={require("../assets/Text.png")}  style={{width : 138, height : 31,marginVertical : 10,alignSelf : "center"}}  />
               <Text style={{fontSize : 30,color : "#0F4E4E",marginVertical : 20,paddingLeft : 16}}>Politique de confidentialité</Text>
               <Text style={styles.Texte}> Nous respectons votre vie privée et nous vous le prouvons. Nous avons à coeur de nous montrer ouverts et transparents, et de veiller à ce que les décisions vous appartiennent.</Text>
               <Text style={styles.Texte}>Nous ne vendons pas vos données personnelles. Vos données personnelles seront traitées conformément à notre Politique de confidentialité, consultable ici.</Text>
               <TouchableOpacity onPress={() => navigation.navigate("Connexion")}  style={styles.ButtonB}>
                            <Text style={styles.ButtonTextB}>Continuer</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default PolitiqueDeconfidentialité



const styles = StyleSheet.create({
    container : {
      flex : 1,
      alignItems : "center",
      justifyContent : "space-between",
      textAlign : "center",
      marginVertical : 10
      
    },

    Texte : {
        fontSize : 14,
        lineHeight : 18,
        color : "#151515",
        marginVertical : 20,
        paddingLeft : 16,

    },
    ButtonTextB: {
        fontSize: 16,
        color: "#ffff",
        alignSelf: "center",
        textTransform: "uppercase",
        lineHeight : 21,
      
      },
      ButtonB : {
        elevation: 1,
        backgroundColor: "#0F4E4E",
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginVertical : 32,
        width : 300,
        marginLeft : "auto",
        marginRight : "auto",
        marginVertical : 100
         
      },
})