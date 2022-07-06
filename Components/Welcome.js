import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from "../Style";

const Welcome = ({navigation}) => {
    return (
        <View style={Style.container}>
            <Image style={Style.imageCircle} source={require("../assets/Image_Cat_Welcome.png")}/>

            <Text style={Style.primaryTitle}>Créer le profil de votre animal pour pouvoir jouer avec lui !</Text>

            <Text style={Style.baselineText}>Une fois son profil créé, vous n’aurez plus qu’à configurer son collier.</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Créer un profil</Text>
            </TouchableOpacity>
       </View>
    )
}

export default Welcome