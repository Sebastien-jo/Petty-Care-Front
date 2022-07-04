import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from "../Style";

const Dashboard = () => {
    
    return (
        <View style={Style.container}>
            <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                <View>
                    <Text style={Style.secondaryTitle}>Journal</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <Image style={{height: 16, width: 16, marginRight: 15}} source={require("../assets/Icon_Help.png")}/>

                    <Image style={{height: 16, width: 16}} source={require("../assets/Icon_Notifications.png")}/>
                </View>
            </View>

            <View style={{flexDirection: "row", width: "100%", justifyContent: "flex-start"}}>
                <Image style={{height: 65, width: 65, borderRadius: 10, marginRight: 15}} source={require("../assets/Image_Profile_User.png")}/>

                <View>
                    <Text>Bonjour Anna !</Text>
                    <Text>1 animal</Text>
                </View>
            </View>

            <View>
                <Text style={Style.tertiaryTitle}>Résumé des activités de Cannelle</Text>

                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    <View style={Style.halfCard}>
                        <View>
                            <Text style={Style.hightText}>15</Text>
                            <Text style={Style.subtitleText}>mètres parcourus</Text>
                        </View>

                        <Text style={Style.currentText}>Aujourd'hui</Text>
                    </View>

                    <View style={Style.halfCard}>
                        <View>
                            <Text style={Style.hightText}>05</Text>
                            <Text style={Style.subtitleText}>minutes de jeu</Text>
                        </View>

                        <Text style={Style.currentText}>Aujourd'hui</Text>       
                    </View>
                </View>

                <View style={{marginTop: 25}}>
                    <Text style={Style.tertiaryTitle}>Objectif journalier de Cannelle</Text>

                    <View style={Style.wholeCard}>
                        <Text style={Style.hightText}>30 mètres</Text>
                        <Text style={Style.currentText}>X % de l’objectif quotidien (1000 mètres)</Text>

                        <View style={{backgroundColor: "#151515", opacity: "10%", borderRadius: 18, height: 20, width: "100%", marginTop: 10}}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Dashboard