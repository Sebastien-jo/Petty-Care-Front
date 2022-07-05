import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from "../Style";

const Parameters = () => {

    const [lastname, setLastname] = useState("Pellin");
    const [firstname, setFirstname] = useState("Anne");
    const [datebirth, setDatebirth] = useState("13/07/1985");
    const [email, setEmail] = useState("anne.pellin@gmail.com");
    const [address, setAddress] = useState("3 rue du mail 75002 Paris");

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <View style={Style.container}>
            <View>
                <Text style={Style.secondaryTitle}>Profil</Text>
            </View>

            <View style={Style.headerParameters}>
                <Text style={Style.tertiaryTitle}>Modifier mon profil</Text>
                <Image style={{width: "100%", height: 220, borderRadius: 18, marginTop: 10}} source={require("../assets/Image_Profile_User.png")}/>
            </View>

            <View style={Style.blockParameters}>
                <Text style={Style.tertiaryTitle}>Mes informations personnelles</Text>

                <View>
                    <Text style={Style.currentText}>Nom</Text>
                    <TextInput value={lastname} onChangeText={(lastname) => setLastname(lastname)} style={Style.labelText}/>   
                </View>                

                <View>
                    <Text style={Style.currentText}>Prénom</Text>
                    <TextInput value={firstname} onChangeText={(firstname) => setFirstname(firstname)} style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.currentText}>Date de naissance</Text>
                    <TextInput value={datebirth} onChangeText={(datebirth) => setDatebirth(datebirth)} style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.currentText}>Adresse email</Text>
                    <TextInput value={email} onChangeText={(email) => setEmail(email)} style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.currentText}>Adresse postale</Text>
                    <TextInput value={address} onChangeText={(address) => setAddress(address)} style={Style.labelText}/>
                </View>

                <View style={Style.submitCenter}>
                    <TouchableOpacity onPress={handleSubmit} style={Style.primaryCta}>
                        <Text style={Style.primaryCtaText}>Enregistrer les modifications</Text>
                    </TouchableOpacity>
                </View>          
            </View>

            <View style={Style.optionActions}>
                <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.tertiaryCta}>
                    <Text style={Style.tertiaryCtaText}>Historique de commande</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Text style={Style.alertLink}>Supprimer mon compte</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Parameters