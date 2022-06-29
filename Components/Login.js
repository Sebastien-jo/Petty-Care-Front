import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import Style from "../Style";
import Checkbox from 'expo-checkbox';

const Login = ({navigation}) => {
    const [isChecked, setChecked] = useState(false); //checkbox

    const [username , setUsername] = useState("") //input username

    const [password , setPassword] = useState("") // input password

    const [error , setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!username || !password){
          setError(true)
          return;
        }
        setError(false)
        alert("ok")
        navigation.navigate("Tab")
    }

    return (
        <View style={Style.container}>
            <Image source={require("../assets/Logo_Viridian_Green_Inline.png")} style={Style.logoInline}/>

            <Text  style={Style.primaryTitle}>Connexion à votre compte</Text>

            <View style={{marginVertical: 15}}>
                <Text style={Style.currentText}>Votre identifiant</Text>
                <TextInput value={username} onChangeText={(username) => setUsername(username)} placeholder='Identifiant' style={Style.labelText}/>   
            </View>

            <View>
                <Text style={Style.currentText}>Votre mot de passe</Text>
                <TextInput value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} placeholder='Mot de passe' style={Style.labelText}/>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>       
                <View style={{flexDirection: "row"}}>
                    <Checkbox
                        style={Style.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#0F4E4E' : undefined}
                    />

                    <Text style={Style.legendCheckbox}>Se souvenir de moi</Text>
                </View>

                <Text style={Style.linkText}>Mot de passe oublié</Text>
            </View>

            {error ? <Text style={Style.errorText}>Mot de passe ou nom d’utilisateur incorrect</Text> : null}

            <View style={{marginVertical: 10}}>
                <TouchableOpacity onPress={handleSubmit} style={Style.primaryCta}>
                    <Text style={Style.primaryCtaText}>Se connecter</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginVertical: 40}}>
                <Text style={Style.baselineText}>Vous n'avez pas de compte ?</Text>

                <TouchableOpacity style={Style.tertiaryCta}>
                    <Text style={Style.tertiaryCtaText}>Découvrez nos produits</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login