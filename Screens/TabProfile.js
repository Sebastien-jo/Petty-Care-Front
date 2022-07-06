import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Style from "../Style";

const TabProfile = ({navigation}) => {
    
    return (
        <View style={Style.containerNavigator}>
            <ScrollView style={Style.scrollview}>

                <View style={Style.headerProfile}>
                    <ImageBackground style={{flex: 1}} source={require("../assets/Image_Cat_Profile.png")}>
                        <TouchableOpacity onPress={() => navigation.navigate("AnimalParameters")} style={{width: "100%", alignItems: "flex-end", padding: 15}}>
                            <Ionicons name="settings" size={20} color="#FFFFFF"/>
                        </TouchableOpacity>

                        <View style={Style.headerAnimal}>
                            <Text style={Style.headerAnimalTitle}>Cannelle</Text>
                            <Text style={Style.headerAnimalText}>12 ans</Text>
                            <Text style={Style.headerAnimalStatut}>Joueuse aguerrie</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{flexDirection: "column", width: "100%"}}>
                    <View style={Style.card}>
                        <Text style={Style.tertiaryTitle}>Podomètre</Text>

                        <View style={Style.wholeCard}>
                            <Text style={Style.hightText}>30 mètres</Text>
                            <Text style={Style.currentText}>X % de l’objectif quotidien (1000 mètres)</Text>
                        </View>
                    </View>

                    <View style={Style.card}>
                        <Text style={Style.tertiaryTitle}>Suivi des activités</Text>

                        <View style={Style.wholeCard}>
                            <Text style={Style.hightText}>2 sessions de jeu</Text>
                            <Text style={Style.currentText}>10 minutes au total</Text>
                        </View>
                    </View>

                    <View style={Style.card}>
                        <View style={Style.historyCards}>
                            <Text style={Style.tertiaryTitle}>Historique des activités</Text>
                            <Text style={Style.linkText}>Plus</Text>
                        </View>

                        <View style={Style.wholeCard}>
                            <View style={Style.historyCards}>
                                <Text style={Style.currentText}>Hier</Text>
                                <Text style={Style.currentBoldText}>142 mètres parcourus</Text>
                            </View>

                            <View style={Style.historyCards}>
                                <Text style={Style.currentText}>Avant-hier</Text>
                                <Text style={Style.currentBoldText}>589 mètres parcourus</Text>
                            </View>

                            <View style={Style.historyCards}>
                                <Text style={Style.currentText}>Sam. 11/06</Text>
                                <Text style={Style.currentBoldText}>631 mètres parcourus</Text>
                            </View>
                        </View>
                    </View>

                    <View style={Style.card}>
                        <View style={Style.historyCards}>
                            <Text style={Style.tertiaryTitle}>Données corporelles</Text>

                            <Text style={Style.linkText}>Plus</Text>
                        </View>

                        <View style={Style.wholeCard}>
                            <Text style={Style.hightText}>4 kg</Text>
                            <Text style={Style.currentText}>Objectif : 3.5 kg</Text>
                        </View>
                    </View>
                </View>
            
            </ScrollView>
        </View> 
    )
}

export default TabProfile