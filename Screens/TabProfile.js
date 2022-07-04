import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from "../Style";

const TabProfile = () => {
    
    return (
        <View style={Style.container}>
            <View>
                <Text>Cannelle</Text>
                <Text>12 âge</Text>
                <Text>Joueuse aguerrie</Text>
            </View>

            <View style={{marginTop: 25}}>
                <Text style={Style.tertiaryTitle}>Podomètre</Text>

                <View style={Style.wholeCard}>
                    <Text style={Style.hightText}>30 mètres</Text>
                    <Text style={Style.currentText}>X % de l’objectif quotidien (1000 mètres)</Text>

                    <View style={{backgroundColor: "#151515", opacity: "10%", borderRadius: 18, height: 20, width: "100%", marginTop: 10}}></View>
                </View>
            </View>

            <View style={{marginTop: 25}}>
                <Text style={Style.tertiaryTitle}>Suivi des activités</Text>

                <View style={Style.wholeCard}>
                    <Text style={Style.hightText}>2 sessions de jeu</Text>
                    <Text style={Style.currentText}>10 minutes au total</Text>
                </View>
            </View>

            <View style={{marginTop: 25}}>
                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    <Text style={Style.tertiaryTitle}>Historique des activités</Text>
                    <Text style={Style.linkText}>Plus</Text>
                </View>

                <View style={Style.wholeCard}>
                </View>
            </View>

            <View style={{marginTop: 25}}>
                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    <Text style={Style.tertiaryTitle}>Données corporelles</Text>
                    <Text style={Style.linkText}>Plus</Text>
                </View>

                <View style={Style.wholeCard}>
                </View>
            </View>
        </View>
    )
}

export default TabProfile