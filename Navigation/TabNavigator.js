import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TabDashboard from "../Screens/TabDashboard";
import TabProfile from "../Screens/TabProfile";
import TabPlay from "../Screens/TabPlay";
import TabAccount from "../Screens/TabAccount";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === "Journal") {
                        iconName = "home";
                    } else if (route.name === "Profil") {
                        iconName = "paw";
                    } else if (route.name === "Jouer") {
                        iconName = "play";
                    } else if (route.name === "Compte") {
                        iconName = "person";
                    }
                    return <Ionicons name={iconName} size={20} color={color}/>;
                },
                tabBarActiveTintColor: '#151515',
                tabBarInactiveTintColor: 'gray',
          })}>      

            <Tab.Screen options={{headerTitle: "Journal", headerShown: false}} name="Journal" component={TabDashboard}/>

            <Tab.Screen options={{headerTitle: "Profil", headerShown: false}} name="Profil" component={TabProfile}/>

            <Tab.Screen options={{headerTitle: "Jouer", headerShown: false}} name="Jouer" component={TabPlay}/>

            <Tab.Screen options={{headerTitle: "Compte", headerShown: false}} name="Compte" component={TabAccount}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;