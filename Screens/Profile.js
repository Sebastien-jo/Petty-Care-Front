import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useForm} from "react-hook-form";
import FormInput from "../Components/FormInput";
import Style from "../Style";

const Profile = ({navigation}) => {

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: "",
            age: "",
            weight: "",
            weightGoal: ""
        }
    });

    console.log(errors);

    const onSignUp = async(data) => {
        console.log(data);

        fetch("https://localhost:8000/api/pets/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            redirect: navigation.navigate("ConnectToy")
        }
        )
        .then(response => response.json())
            .then(data => console.log(data)
            ).catch((error) => {
                console.error(error);
        });
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
                        <FormInput
                        name="name"
                        placeholder="Prénom de l'animal"
                        control={control}
                        rules={{required: "Veuillez renseigner le prénom de votre animal"}}
                        />
                    </View>

                    <View>
                        <Text style={Style.currentText}>Date de naissance</Text>
                        <FormInput
                        name="weight"
                        placeholder="Poids de l'animal"
                        control={control}
                        rules={{required: "Veuillez renseigner le poids de votre animal"}}
                        />
                    </View>

                    <View>
                        <Text style={Style.currentText}>Poids de l'animal</Text>
                        <FormInput
                        name="age"
                        placeholder="Date de naissance de l'animal"
                        control={control}
                        rules={{required: "Veuillez renseigner la date de naissance de votre animal"}}
                        />
                    </View>

                    <View>
                        <Text style={Style.currentText}>Poids à atteindre</Text>
                        <FormInput
                        name="weightGoal"
                        placeholder="Objectif de poids"
                        control={control}
                        rules={{required: "Veuillez renseigner un objectif"}}
                        />
                    </View>

                    <View>
                        <Text style={Style.baselineText}>* Champ obligatoire</Text>
                    </View>
                </View>

                <View style={Style.containerView}>
                    <TouchableOpacity onPress={handleSubmit(onSignUp)} style={Style.primaryCta}>
                        <Text style={Style.primaryCtaText}>Valider le profil</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default Profile