import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native';
import Style from '../Style.js';
import Logo from '../Components/Logo';

const Home = ({navigation}) => { 
    return(       
        <View style={Style.container}>

            <Logo/>

            <Text style={Style.primaryTitle}>Bienvenue sur Petty Care !</Text>

            <View style={Style.containerView}>
                <Text style={Style.baselineText}>L'application santé de votre animal de compagnie</Text>
              
                <TouchableOpacity onPress={() => alert("Redirection vers le site e-commerce")} style={Style.secondaryCta}>
                    <Text style={Style.secondaryCtaText}>Découvrez nos produits</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Install")} style={Style.primaryCta}>
                    <Text style={Style.primaryCtaText}>Faites vos premiers pas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home