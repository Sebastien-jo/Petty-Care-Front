import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Style from '../Style.js';
import Logo from './Logo.js';

const Home = ({navigation}) => { 
    return(       
        <View style={Style.container}>

            <Logo/>

            <Text style={Style.primaryTitle}>Bienvenue sur Petty Care !</Text>

            <View>
                <Text style={Style.currentText}>L'application santé de votre animal de compagnie</Text>
              
                <TouchableOpacity onPress={() => alert("Redirection vers le site e-commerce")} style={Style.primaryCta}>
                    <Text style={Style.primaryCtaText}>Découvrez nos produits</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Install")} style={Style.secondaryCta}>
                    <Text style={Style.secondaryCtaText}>Faites vos premiers pas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home