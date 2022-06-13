import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView  } from 'react-native';
const Install = () => {
    return(
        
        <View style={styles.Install}>
            
            <Image style={styles.ImgRad} source={require("./ImgRad.png")} />  
            
            <Text>Lançons-nous ! Voici ce que vous devez faire avant de commencer :</Text>          
        </View>
    )
}

export default Install


const styles = StyleSheet.create({
    Install : {
        flex : 1,
        alignItems : "center",
        justifyContent : "space-around",
        flexDirection : "column",
    },
    ImgRad : {
        width : 161.55,
        borderRadius : 99
       
    }

})