import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import Style from "../Style";

const TabPlay = ({navigation}) => {

    return (
        <View style={Style.containerNavigator}>
            <ScrollView style={Style.scrollview}>

                <View style={Style.headerProfile}>
                    <ImageBackground style={{flex: 1}} source={require("../assets/Image_Cat_Profile.png")}>
                        <View style={Style.headerAnimal}>
                            <Text style={Style.headerAnimalTitle}>Cannelle</Text>
                            <Text style={Style.headerAnimalText}>12 ans</Text>
                            <Text style={Style.headerAnimalStatut}>Joueuse aguerrie</Text>
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

            </ScrollView>
        </View>
    )
}

export default TabPlay