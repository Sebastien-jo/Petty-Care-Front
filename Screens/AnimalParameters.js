import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useForm} from "react-hook-form";
import FormInput from '../Components/FormInput';
import {UserProfileContext} from "../Context/UserProfileContext";
import Style from "../Style";

const Parameters = () => {

    const {userProfile, setUserProfile} = useContext(UserProfileContext);

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: "",
            age: "",
            weight: "",
            weightGoal: ""
        }
    });

    const onModify = (data) => {
        console.log(data)
    }
    
    return (
        <View style={Style.containerNavigator}>
            <ScrollView style={Style.scrollview}>
                <View>
                    <Text style={Style.secondaryTitle}>Profil</Text>
                </View>

                <View style={Style.headerParameters}>
                    <Text style={Style.tertiaryTitle}>Modifier le profil de {userProfile.name}</Text>
                    <Image style={{width: "100%", height: 220, borderRadius: 18, marginTop: 10}} source={require("../assets/Image_Cat_Profile.png")}/>
                </View>

                <View style={Style.blockParameters}>
                    <Text style={Style.tertiaryTitle}>Informations de {userProfile.name}</Text>

                    <View>
                        <Text style={Style.currentText}>Prénom</Text>
                        <FormInput
                        name="name"
                        placeholder={userProfile.name}
                        control={control}
                        rules={{required: "Veuillez renseigner un nom valide"}}
                    />  
                    </View>                

                    <View>
                        <Text style={Style.currentText}>Âge de l'animal</Text>
                        <FormInput
                        name="age"
                        placeholder={userProfile.age}
                        control={control}
                        rules={{required: "Veuillez renseigner un nom valide"}}
                    />
                    </View>

                    <View>
                        <Text style={Style.currentText}>Poids de l'animal</Text>
                        <FormInput
                        name="weight"
                        placeholder={userProfile.weight}
                        control={control}
                        rules={{required: "Veuillez renseigner un nom valide"}}
                    />
                    </View>

                    <View>
                        <Text style={Style.currentText}>Objectif poids de l'animal</Text>
                        <FormInput
                        name="weightGoal"
                        placeholder={userProfile.weightGoal}
                        control={control}
                        rules={{required: "Veuillez renseigner un nom valide"}}
                    />
                    </View>

                    <View style={Style.submitCenter}>
                        <TouchableOpacity onPress={handleSubmit} style={Style.primaryCta}>
                            <Text style={Style.primaryCtaText}>Enregistrer les modifications</Text>
                        </TouchableOpacity>
                    </View>          
                </View>

                <View style={Style.optionActions}>
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                        <Text style={Style.alertLink}>Supprimer le compte de mon animal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Parameters