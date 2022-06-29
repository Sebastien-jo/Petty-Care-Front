import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
        <Image style={{borderRadius : 99, width : 156, height : 156 }} source={require("../assets/Image_Cat_Install.png")} />
        <Text style={{fontSize : 20,textAlign : "center", marginVertical : 25, color : "#0F4E4E"}}>Créer le profil de votre {"\n"} animal pour pouvoir jouer {"\n"} avec lui !</Text>
        <Text style={styles.Texte}>Une fois son profil créé, vous n’aurez plus qu’à {"\n"} configurer son collier.</Text>
        <TouchableOpacity   style={styles.ButtonB}>
                            <Text style={styles.ButtonTextB}>Créer un profil</Text>
                </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },

    Texte : {
        fontSize : 14,
        textAlign : "center"
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
        marginRight : "auto"
         
      },
})