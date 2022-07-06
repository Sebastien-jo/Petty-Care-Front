import React from 'react';
import {Text, View, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import Style from '../Style';

const Install = ({navigation}) => {

    return(       
        <View style={Style.container}>
      
            <View>
                <Image style={Style.imageCircle} source={require("../assets/Image_Cat_Install.png")}/>

                <Image source={require("../assets/Logo_Viridian_Green_Inline.png")} style={Style.logoInline}/>
            </View>
            
            <View style={{flex: 2}}>
                <Text style={Style.secondaryTitle}>Lançons-nous ! Voici ce que vous devez faire avant de commencer :</Text>

                <View>
                    <Text style={Style.currentText}>1. Prenez connaissance de nos Conditions d’utilisation et de notre Politique de confidentialité</Text>
                    <Text style={Style.currentText}>2. Choisissez les données que nous pouvons utiliser pour personnaliser votre expérience et optimiser nos produits</Text>
                    <Text style={Style.currentText}>3. Sélectionnez le type de communications que vous souhaitez recevoir dans l’application</Text>
                </View>        
            </View>
            
            <View style={Style.containerView}>
                <TouchableOpacity onPress={() => navigation.navigate("CGU")} style={Style.primaryCta}>
                    <Text style={Style.primaryCtaText}>Continuer</Text>
                </TouchableOpacity>                         
            </View>

        </View>
    )
}

export default Install
