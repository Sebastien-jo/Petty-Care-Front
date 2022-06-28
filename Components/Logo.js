import {View, Image ,StyleSheet} from 'react-native';
import React from 'react';

const Logo = () => {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/Logo_Petty_Care_Viridian_Green.png")} />
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    image : {
        shadowColor: "#000000",
        marginVertical : 20,
        width : 250,
        height : 145,
        alignSelf : "center",
        shadowOpacity:  0.17,
        shadowRadius: 3.05
    }
})