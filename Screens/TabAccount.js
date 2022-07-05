import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from "../Style";

const TabAccount = ({navigation}) => {
    return (
        <View style={Style.container}>
            <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
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
                        <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 15}}>
                            <Text style={Style.parametersText}>Modifier mon profil</Text>

                            <TouchableOpacity onPress={() => navigation.navigate("UserParameters")}>
                                <Image style={Style.chevrons} source={require("../assets/Icon_Chevron.png")}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Style.card}>
                    <Text style={Style.tertiaryTitle}>Support / Aide</Text>

                    <View style={Style.parametersCard}>
                        <View style={Style.parametersTab}>
                            <Text style={Style.parametersText}>Contacter le support</Text>
                            <Image style={Style.chevrons} source={require("../assets/Icon_Chevron.png")}/>
                        </View>

                        <View style={Style.parametersTab}>
                            <Text style={Style.parametersText}>Politique de confidentialité</Text>
                            <Image style={Style.chevrons} source={require("../assets/Icon_Chevron.png")}/>
                        </View>

                        <View style={Style.parametersTab}>
                            <Text style={Style.parametersText}>Conditions Générales d'utilisation</Text>
                            <Image style={Style.chevrons} source={require("../assets/Icon_Chevron.png")}/>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.tertiaryCta}>
                    <Text style={Style.tertiaryCtaText}>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TabAccount