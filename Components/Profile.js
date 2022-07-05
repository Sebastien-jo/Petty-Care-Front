import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from "../Style";

const Profile = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [datebirth, setDatebirth] = useState("")
    const [weight, setWeight] = useState("")
    const [goalWeight, setGoalWeight] = useState("")

    return (
        <View style={Style.container}>
            <View>
                <Image style={{height: 125, width: 195, marginBottom: 10}} source={require("../assets/Image_Cat_Profile.png")}/>
                <Text style={Style.linkText}>Ajouter une photo de profil</Text>
            </View>

            <View style={{width: "100%"}}>
                <View>
                    <Text style={Style.currentText}>Prénom de l'animal*</Text>
                    <TextInput value={username} onChangeText={(username) => setUsername(username)} placeholder='Son prénom' style={Style.labelText}/>   
                </View>

                <View>
                    <Text style={Style.currentText}>Date de naissance</Text>
                    <TextInput value={datebirth} onChangeText={(datebirth) => setDatebirth(datebirth)} placeholder='Sa date de naissance' style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.currentText}>Poids de l'animal</Text>
                    <TextInput value={weight} onChangeText={(weight) => setWeight(weight)} placeholder='Son poids' style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.currentText}>Poids à atteindre</Text>
                    <TextInput value={goalWeight} onChangeText={(goalWeight) => setGoalWeight(goalWeight)} placeholder='Son poids idéal' style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.baselineText}>* Champ obligatoire</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ConnectToy")} style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Valider le profil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile