import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Style from "../Style";

const TabPlay = ({navigation}) => {

    return (
        <View style={{backgroundColor: "#FFFFFF", height: "100%"}}>
            <View style={{width: "100%", height: "220px"}}>
                <ImageBackground style={{flex: 1}} source={require("../assets/Image_Cat_Profile.png")}>
                    <View style={{flexDirection: "column", padding: 15, marginTop: 60}}>
                        <Text style={{color: "#FFFFFF", fontSize: "22px", fontWeight: "500"}}>Cannelle</Text>
                        <Text style={{color: "#FFFFFF", fontSize: "14px", fontWeight: "500", fontFamily: "Bilo"}}>12 ans</Text>
                        <Text style={{color: "#FFFFFF", fontSize: "14px", fontWeight: "500", fontFamily: "Bilo", paddingTop: 10}}>Joueuse aguerrie</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={Style.container}>              
                <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.primaryCta}>
                        <Text style={Style.primaryCtaText}>Jouer</Text>
                </TouchableOpacity>

                <View style={{paddingVertical: 30}}>
                    <View>
                        <Text style={Style.baselineText}>Vous ne retrouvez plus votre jouet ?</Text>
                        <Text style={Style.baselineText}>Aucun problème, faites le sonner !</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.tertiaryCta}>
                        <Text style={Style.tertiaryCtaText}>Faire sonner le jouet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TabPlay