import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
        <Image style={styles.Image} source={require("../assets/Logo.png")} />
    </View>
  )
}

export default Logo

const  styles = StyleSheet.create({
Image : {
  shadowColor: "#000000",
marginVertical : 20,
  width : 250,
  height : 145,
  alignSelf : "center",
shadowOpacity:  0.17,
shadowRadius: 3.05,

}
})