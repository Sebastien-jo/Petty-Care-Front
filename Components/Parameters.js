import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from "../Style";

const Parameters = () => {

    const [username , setUsername] = useState("Pellin") //input username
    const [age, setAge] = useState("12") // input age
    const [weight, setWeight] = useState("4") // input poids
    
    return (
        <View style={Style.container}>
            <View>
                <Text style={Style.secondaryTitle}>Profil</Text>
            </View>

            <View style={{width: "100%", paddingTop: 20}}>
                <Text style={Style.tertiaryTitle}>Modifier le profil de Cannelle</Text>
                <Image style={{width: "100%", height: 220, borderRadius: 18, marginTop: 10}} source={require("../assets/Image_Cat_Profile.png")}/>
            </View>

            <View style={{width: "100%", paddingVertical: 20}}>
                <Text style={Style.tertiaryTitle}>Informations de Cannelle</Text>

                <View>
                    <Text style={Style.currentText}>Prénom</Text>
                    <TextInput value={username} onChangeText={(username) => setUsername(username)} style={Style.labelText}/>   
                </View>                

                <View>
                    <Text style={Style.currentText}>Âge de l'animal</Text>
                    <TextInput value={age} onChangeText={(age) => setAge(age)} style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.currentText}>Poids de l'animal</Text>
                    <TextInput value={weight} onChangeText={(weight) => setWeight(weight)} style={Style.labelText}/>
                </View>

                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.primaryCta}>
                        <Text style={Style.primaryCtaText}>Enregistrer les modifications</Text>
                    </TouchableOpacity>
                </View>          
            </View>

            <View style={{paddingTop: 30, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.tertiaryCta}>
                    <Text style={Style.tertiaryCtaText}>Réinitialiser le compte</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Text style={Style.alertLink}>Supprimer le compte de mon animal</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Parameters