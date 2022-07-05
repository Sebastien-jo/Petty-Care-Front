import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from "../Style";

const ConnectActive = ({navigation}) => {
    
    return (
        <View style={Style.container}>
            <Image style={Style.imageCircle} source={require("../assets/Image_Cat_ConnectActive.png")}/>

            <Text style={Style.primaryTitle}>Félicitations</Text>

            <Text style={Style.baselineText}>Tout est prêt. Vous pouvez dès à présent jouer avec votre animal.</Text>

            <TouchableOpacity onPress={() => navigation.navigate("TabPlay")} style={Style.primaryCta}>
                <Text style={Style.primaryCtaText}>Jouer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConnectActive