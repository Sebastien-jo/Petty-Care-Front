import React, {useState, useContext} from 'react';
import {useForm} from "react-hook-form";
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import FormInput from '../Components/FormInput';
import {UserProfileContext} from "../Context/UserProfileContext";
import Style from "../Style";

const Parameters = () => {

    const {userProfile, setUserProfile} = useContext(UserProfileContext);

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    // const [lastname, setLastname] = useState("Pellin");
    // const [firstname, setFirstname] = useState("Anne");
    // const [datebirth, setDatebirth] = useState("13/07/1985");
    // const [email, setEmail] = useState("anne.pellin@gmail.com");
    // const [address, setAddress] = useState("3 rue du mail 75002 Paris");

    const onModify = async (data) => {
        console.log(data);
        // e.preventDefault()
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
                    <FormInput
                        name="lastname"
                        placeholder={userProfile.lastname}
                        control={control}
                        rules={{required: "Veuillez renseigner un nom valide"}}
                    />
                </View>                

                <View>
                    <Text style={Style.currentText}>Prénom</Text>
                    <FormInput
                        name="firstname"
                        placeholder={userProfile.firstname}
                        control={control}
                        rules={{required: "Veuillez renseigner un prénom valide"}}
                    />
                </View>

                <View>
                    <Text style={Style.currentText}>Adresse email</Text>
                    <FormInput
                        name="username"
                        placeholder={userProfile.username}
                        control={control}
                        rules={{required: "Veuillez renseigner un email valide"}}
                    />
                </View>

                <View>
                    <Text style={Style.currentText}>Adresse postale</Text>
                    <FormInput
                        name="address"
                        placeholder={userProfile.address}
                        control={control}
                        rules={{required: "Veuillez renseigner une adresse valide"}}
                    />
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