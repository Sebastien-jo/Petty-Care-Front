import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import Style from '../Style';

const Install = ({navigation}) => {

    const DATA = [
        {
          id: '1',
          title: '1. Prenez connaissance de nos Conditions d’utilisation et de notre Politique de confidentialité',
        },
        {
          id: '2',
          title: '2. Choisissez les données que nous pouvons utiliser pour personnaliser votre expérience et optimiser nos produits',
        },
        {
          id: '3',
          title: '3. Sélectionnez le type de communications que vous souhaitez recevoir dans l’application',
        },
      ];

    const renderItem = ({item}) => (
        <View>
            <Text style={Style.itemTextList}>{item.title}</Text>
        </View>
    );

    return(       
        <View style={Style.container}>
            
            <View>
                <Image style={{width: 170, alignSelf: "center"}} source={require("./ImgRad.png")} />

                <Image source={require("../assets/Logo_Viridian_Green_Inline.png")} style={Style.logoInline}/>
            </View>
            
            <View style={{flex: 2}}>
                <Text style={Style.secondaryTitle}>Lançons-nous ! Voici ce que vous devez faire avant de commencer :</Text>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />           
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate("CGU")} style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Continuer</Text>
            </TouchableOpacity>
                          
        </View>
    )
}

export default Install
