import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import TabDashboard from "../Screens/TabDashboard";
import TabProfile from "../Screens/TabProfile";
import TabPlay from "../Screens/TabPlay";
import TabAccount from "../Screens/TabAccount";
import Style from "../Style";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>          
            <Tab.Screen options={{headerTitle: "Journal", headerShown: false}} name="Journal" component={TabDashboard}/>
            <Tab.Screen options={{headerTitle: "Profil", headerShown: false}} name="Profil" component={TabProfile}/>
            <Tab.Screen options={{headerTitle: "Jouer", headerShown: false}} name="Jouer" component={TabPlay}/>
            <Tab.Screen options={{headerTitle: "Compte", headerShown: false}} name="Compte" component={TabAccount}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;