import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Checkbox from 'expo-checkbox';
import Style from "../Style";
import {useForm} from "react-hook-form";
import LoginInput from "./LoginInput";

const Login = ({navigation}) => {
    
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    console.log(errors);

    const [errorUser, setErrorUser] = useState(false);

    const onSignIn = data => {
        console.log(data);
        // e.preventDefault()

        fetch("https://localhost:8000/api/login",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        .then(response => response.json())
            .then(data => console.log(data)
            ).catch((error) => {
                console.error(error);
            });
   
        
        // if (!username || !password){
            // setErrorUser(true)
            // return;
        // }
        // setErrorUser(false)
        // navigation.navigate("");
    }

    const onForgotPassword = () => {
        // des choses
    }

    const [isChecked, setChecked] = useState(false);


    return (
        <View style={Style.containerNavigator}>

            <ScrollView style={Style.scrollview}>
                <Image source={require("../assets/Logo_Viridian_Green_Inline.png")} style={Style.logoInline}/>

                <Text style={Style.primaryTitle}>Connexion à votre compte</Text>

                <View style={{marginVertical: 15}}>
                    <Text style={Style.currentText}>Votre identifiant</Text>
                    <LoginInput
                        name="username"
                        placeholder="Identifiant"
                        control={control}
                        rules={{required: "Veuillez renseigner un identifiant valide"}}
                    />
   
                    <Text style={Style.currentText}>Votre mot de passe</Text>
                    <LoginInput
                        name="password"
                        placeholder="Mot de passe"
                        control={control}
                        rules={{required: "Veuillez renseigner un mot de passe valide"}}
                    />

                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", marginVertical: 10}}>       
                        <View style={{flexDirection: "row"}}>
                            <Checkbox
                                style={Style.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#0F4E4E' : undefined}
                            />

                            <Text style={Style.legendCheckbox}>Se souvenir de moi</Text>
                        </View>

                        <View style={{marginLeft: 40}}>
                            <Text style={Style.linkText}>Mot de passe oublié</Text>
                        </View>
                    </View>
                </View>

                <View style={Style.containerView}>
                    <TouchableOpacity onPress={handleSubmit(onSignIn)} style={Style.primaryCta}>
                        <Text style={Style.primaryCtaText}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
                
                {/* {errorUser ? <Text style={Style.errorText}>Mot de passe ou nom d’utilisateur incorrect</Text> : null} */}

                <View style={{marginVertical: 30}}>
                    <Text style={Style.baselineText}>Vous n'avez pas de compte ?</Text>

                    {/* Redirection définitive : déploiement */}
                    {/* <TouchableOpacity onPress={() => alert("Redirection vers le site e-commerce")} style={Style.tertiaryCta}>
                        <Text style={Style.tertiaryCtaText}>Découvrez nos produits</Text>
                    </TouchableOpacity> */}

                    {/* Redirection provisoire : dév */}
                    <View style={Style.containerView}>
                        <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={Style.tertiaryCta}>
                            <Text style={Style.tertiaryCtaText}>Découvrez nos produits</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default Login