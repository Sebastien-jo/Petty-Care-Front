import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from "../Style";

const Dashboard = () => {
    
    return (
        <View style={Style.container}>
            <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                <View>
                    <Text style={Style.secondaryTitle}>Journal</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <Image style={{height: 16, width: 16, marginRight: 15}} source={require("../assets/Icon_Help.png")}/>

                    <Image style={{height: 16, width: 16}} source={require("../assets/Icon_Notifications.png")}/>
                </View>
            </View>

            <View style={{flexDirection: "row", width: "100%", justifyContent: "flex-start"}}>
                <Image style={{height: 65, width: 65, borderRadius: 10, marginRight: 15}} source={require("../assets/Image_Profile_User.png")}/>

                <View>
                    <Text>Bonjour Anna !</Text>
                    <Text>1 animal</Text>
                </View>
            </View>

            <View>
                <Text>Résumé des activités de Cannelle</Text>

                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "column", backgroundColor: "#E2F1EF", width: "50%", padding: 20, borderRadius: 18}}>
                        <Text>15</Text>
                        <Text>mètres parcourus</Text>
                        <Text>Aujourd'hui</Text>
                    </View>

                    <View style={{flexDirection: "column", backgroundColor: "#E2F1EF", width: "50%", padding: 20, borderRadius: 18}}>
                        <Text>05</Text>
                        <Text>minutes de jeu</Text>
                        <Text>Aujourd'hui</Text>                  
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Dashboard