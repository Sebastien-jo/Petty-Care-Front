import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from "../Style";

const Welcome = () => {
    return (
        <View style={Style.container}>
            <View style={{flexDirection: "row", marginLeft: "85%"}}>
                <Image style={{height: 16, width: 16, marginRight: 15}} source={require("../assets/Icon_Help.png")}></Image>

                <Image style={{height: 16, width: 16}} source={require("../assets/Icon_Notifications.png")}></Image>
            </View>

            <Image style={Style.imageCircle} source={require("../assets/Image_Cat_Welcome.png")}/>

            <Text style={Style.primaryTitle}>Créer le profil de votre animal pour pouvoir jouer avec lui !</Text>

            <Text style={Style.baselineText}>Une fois son profil créé, vous n’aurez plus qu’à configurer son collier.</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Créer un profil</Text>
            </TouchableOpacity>
       </View>
    )
}

export default Welcome