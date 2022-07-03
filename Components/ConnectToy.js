import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from "../Style";

const ConnectToy = ({navigation}) => {
    const [toy, setToy] = useState("") //input toy

    return (
        <View style={Style.container}>
            <View>
                <Image style={Style.imageCircle} source={require("../assets/Image_Cat_Profile.png")}/>
                <Text>Non connecté au collier. Vérifiez que le périphérique est allumé et connectez le périphérique par Bluetooth.</Text>
            </View>

            <View>
                <Text style={Style.currentText}>Référence du collier</Text>
                <TextInput value={toy} onChangeText={(toy) => setToy(toy)} placeholder='N° du collier' style={Style.labelText}/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ConnectActive")} style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Connecter</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("")} style={Style.tertiaryCta}>
                <Text style={Style.tertiaryCtaText}>Connecter plus tard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConnectToy