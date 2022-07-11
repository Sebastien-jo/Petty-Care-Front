import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {UserProfileContext} from "../Context/UserProfileContext";
import Style from "../Style";

const TabDashboard = ({navigation}) => {

    const {userProfile} = useContext(UserProfileContext);

    return (
        <View style={Style.containerNavigator}>
            <ScrollView style={Style.scrollview}>
                <View style={{paddingTop: 20, flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    <View>
                        <Text style={Style.secondaryTitle}>Journal</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <Image style={Style.iconHelp} source={require("../assets/Icon_Help.png")}/>

                        <Image style={Style.iconNotif} source={require("../assets/Icon_Notifications.png")}/>
                    </View>
                </View>

                <View style={Style.headerDashboard}>
                    <Image style={{height: 65, width: 65, borderRadius: 10, marginRight: 15}} source={require("../assets/Image_Profile_User.png")}/>

                    <View>
                        <Text style={Style.subtitleText}>Bonjour {userProfile.firstname}</Text>

                        <Text style={Style.currentText}>1 animal</Text>
                    </View>
                </View>

                <View>
                    <View style={Style.card}>
                        <Text style={Style.tertiaryTitle}>Résumé des activités de {userProfile.pets}</Text>

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
                    </View>

                    <View style={Style.card}>
                        <Text style={Style.tertiaryTitle}>Objectif journalier de {userProfile.pets}</Text>

                        <View style={Style.wholeCard}>
                            <Text style={Style.hightText}>30 mètres</Text>
                            <Text style={Style.currentText}>X % de l’objectif quotidien (1000 mètres)</Text>
                        </View>
                    </View>
                </View>

                <View style={Style.containerView}>
                    <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.primaryCta}>
                        <Text style={Style.primaryCtaText}>Ajouter un profil</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default TabDashboard