import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Style from '../Style';

const Confidential = ({navigation}) => {
    return (
        <View style={Style.container}>
            <View>
                <Image style={Style.imageCircle} source={require("../assets/Image_Cat_Confidential.png")}/>

                <Image source={require("../assets/Logo_Viridian_Green_Inline.png")} style={Style.logoInline}/>
            </View>

            <View>
                <Text style={Style.secondaryTitle}>Politique de confidentialité</Text>

                <Text style={Style.currentText}>Nous respectons votre vie privée et nous vous le prouvons. Nous avons à coeur de nous montrer ouverts et transparents, et de veiller à ce que les décisions vous appartiennent.</Text>

                <Text style={Style.currentText}>Nous ne vendons pas vos données personnelles. Vos données personnelles seront traitées conformément à notre Politique de confidentialité, consultable ici.</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Connexion")}  style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Continuer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Confidential