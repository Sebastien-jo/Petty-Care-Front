import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Style from "../Style";

const Profile = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [datebirth, setDatebirth] = useState("");
    const [weight, setWeight] = useState("");
    const [goalWeight, setGoalWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if(username == false){
          setError(true)
          return;
        }
        setError(false)
        alert("ok")
        navigation.navigate("")
    }

    return (
        <View style={Style.containerNavigator}>

            <ScrollView style={Style.scrollview}>
                <View style={Style.containerView}>
                    <Image style={{height: 120, width: 190, marginBottom: 10}} source={require("../assets/Image_Cat_Profile.png")}/>
                    <Text style={Style.linkText}>Ajouter une photo de profil</Text>
                </View>

                <View style={{width: "100%", paddingTop: 15}}>
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

                {/* Redirection définitive : déploiement */}
                {/*
                {error ? <Text style={Style.errorText}>Les champs avec * sont obligatoires</Text> : null}

                <TouchableOpacity onPress={handleSubmit} style={Style.primaryCta}>
                    <Text style={Style.primaryCtaText}>Valider le profil</Text>
                </TouchableOpacity>
                */}

                {/* Redirection dév : provisoire */}
                <View style={Style.containerView}>
                    <TouchableOpacity onPress={() => navigation.navigate("ConnectToy")} style={Style.primaryCta}>
                        <Text style={Style.primaryCtaText}>Valider le profil</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default Profile