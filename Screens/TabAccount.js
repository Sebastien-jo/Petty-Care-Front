import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Style from "../Style";

const TabAccount = ({navigation}) => {
    return (
        <View style={Style.containerNavigator}>

            <ScrollView style={Style.scrollview}>   
                <View style={{paddingTop: 20, flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    <View>
                        <Text style={Style.secondaryTitle}>Compte</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <Image style={Style.iconHelp} source={require("../assets/Icon_Help.png")}/>

                        <Image style={Style.iconNotif} source={require("../assets/Icon_Notifications.png")}/>
                    </View>
                </View>

                <View style={{width: "100%"}}>
                    <View style={Style.card}>
                        <Text style={Style.tertiaryTitle}>Mon compte</Text>
                    
                        <View style={Style.parametersCard}>
                            <View style={Style.parametersTab}>
                                <Text style={Style.parametersText}>Modifier mon profil</Text>

                                <TouchableOpacity onPress={() => navigation.navigate("UserParameters")}>
                                    <Ionicons name="arrow-forward" size={16} color="#0F4E4E"/>
                                </TouchableOpacity>
                            </View>

                            <View style={Style.parametersTab}>
                                <Text style={Style.parametersText}>Modifier mon mot de passe</Text>

                                <TouchableOpacity onPress={() => navigation.navigate("")}>
                                    <Ionicons name="arrow-forward" size={16} color="#0F4E4E"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={Style.card}>
                        <Text style={Style.tertiaryTitle}>Support / Aide</Text>

                        <View style={Style.parametersCard}>
                            <View style={Style.parametersTab}>
                                <Text style={Style.parametersText}>Contacter le support</Text>
                                <Ionicons name="arrow-forward" size={16} color="#0F4E4E"/>
                            </View>

                            <View style={Style.parametersTab}>
                                <Text style={Style.parametersText}>Politique de confidentialité</Text>
                                <Ionicons name="arrow-forward" size={16} color="#0F4E4E"/>
                            </View>

                            <View style={Style.parametersTab}>
                                <Text style={Style.parametersText}>Conditions Générales d'utilisation</Text>
                                <Ionicons name="arrow-forward" size={16} color="#0F4E4E"/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={Style.containerView}>
                    <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.tertiaryCta}>
                        <Text style={Style.tertiaryCtaText}>Se déconnecter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>  
            
        </View>
    )
}

export default TabAccount