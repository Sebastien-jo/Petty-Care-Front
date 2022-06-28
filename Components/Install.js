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
          title: '2. Choissiez les données que nous pouvons utiliser pour personnaliser votre expérience et optimiser nos produits ',
        },
        {
          id: '3',
          title: '3. Sélectionnez le type de communications que vous souhaitez recevoir dans l’application',
        },
      ];

    const renderItem = ({item}) => (
        <View>
            <Text style={{lineHeight: 25, fontSize: 15, paddingLeft: 10, padding: 10}}>{item.title}</Text>
        </View>
    );

    return(       
        <View style={styles.Install}>
            
            <View>
                <Image style={{width: 161.55, borderRadius: 99, alignSelf: "center"}} source={require("./ImgRad.png")} />

                <Image source={require("../assets/Text.png")} style={{width: 138, height: 31, marginVertical: 10, alignSelf: "center"}}/>
            </View>
            
            <View style={{flex: 2}}>

            <Text style={Style.primaryTitle}>Lançons-nous ! Voici ce que vous devez faire avant de commencer :</Text>

            <FlatList style={{paddingVertical: 50}}
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

const styles = StyleSheet.create({
    Install: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        marginVertical: 10    
    }
})