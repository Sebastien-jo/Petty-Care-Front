import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView  } from 'react-native';
import Logo from "./Logo"
const Home = ({navigation }) => {
    return(
        
        <View style={styles.Home}>
            <View>
                
                <Logo />
            </View>
                <Text style={{textAlign : "center",fontSize : 25,color : "#0F4E4E"}}>Bienvenue chez Petty Care !</Text>
            <View style={{justifyContent : "space-between", alignContent : "center"}}>
                <Text style={{ fontSize : 14,  paddingVertical : 20, textAlign : "center"}}>Préparez-vous à découvrir l’application santé du futur intelligent. </Text>
              
                <TouchableOpacity onPress={() => alert("Redirection vers le site e-commerce")} style={styles.ButtonA}>
                            <Text style={styles.ButtonTextA}>Découvrez nos produits</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Install")} style={styles.ButtonB}>
                            <Text style={styles.ButtonTextB}>Faites vos premiers pas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    Home : {
        flex : 1,
        alignItems : "center",
        justifyContent : "space-around",
        flexDirection : "column",

        
    },

    Texte : {
        fontFamily : "Parisine Plus Std",
        fontWeight : 700,
        fontSize : 20,
        lineHeight : 22,
        alignSelf : "center",
     
        
    },
    ButtonA: {
        elevation: 1,
        backgroundColor: "#c7ebe6",
        borderRadius: 18,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      ButtonB : {
        elevation: 1,
        backgroundColor: "#0F4E4E",
        borderRadius: 18,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical : 32,
        
      },
      ButtonTextA: {
        fontSize: 16,
        color: "#0F4E4E",
       
        alignSelf: "center",
        textTransform: "uppercase",
        
        lineHeight : 21,
        color : "black"
      },
      ButtonTextB: {
        fontSize: 16,
        color: "#ffff",
       
        alignSelf: "center",
        textTransform: "uppercase",
        
        lineHeight : 21,
      
      }
})