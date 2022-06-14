import { View, Text,Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
        <Image style={{marginVertical : 20,width : 250,height : 145,alignSelf : "center", }} source={require("../assets/Logo.png")} />
    </View>
  )
}

export default Logo