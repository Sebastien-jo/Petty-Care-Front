import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from "../Style";

const Profile = () => {
    const [username, setUsername] = useState("") //input username
    const [age, setAge] = useState("") // input age
    const [weight, setWeight] = useState("") // input poids

    return (
        <View style={Style.container}>
            <View>
                <Image style={{height: 125, width: 195, marginBottom: 10}} source={require("../assets/Image_Cat_Profile.png")}/>
                <Text style={Style.linkText}>Ajouter une photo de profil</Text>
            </View>

            <View>
                <View>
                    <Text style={Style.currentText}>Prénom de l'animal</Text>
                    <TextInput value={username} onChangeText={(username) => setUsername(username)} placeholder='Son prénom' style={Style.labelText}/>   
                </View>

                <View>
                    <Text style={Style.currentText}>Âge de l'animal</Text>
                    <TextInput value={age} onChangeText={(age) => setAge(age)} placeholder='Son âge' style={Style.labelText}/>
                </View>

                <View>
                    <Text style={Style.currentText}>Poids de l'animal</Text>
                    <TextInput value={weight} onChangeText={(weight) => setWeight(weight)} placeholder='Son poids' style={Style.labelText}/>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ConnectToy")} style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Valider le profil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile