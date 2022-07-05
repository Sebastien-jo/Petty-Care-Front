import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import TabDashboard from "../Screens/TabDashboard";
import TabProfile from "../Screens/TabProfile";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    return (
        <>
        <Tab.Navigator>
            <Tab.Screen options={{headerTitle: 'Journal', headerShown: false}} name="Journal" component={TabDashboard}/>

            <Tab.Screen options={{headerTitle: 'Profil', headerShown: false}} name="Profile" component={TabProfile}/>

            <Tab.Screen options={{headerTitle: 'Jouer', headerShown: false}} name="Profile2" component={TabProfile}/>

            <Tab.Screen options={{headerTitle: 'Compte', headerShown: false}} name="Profile3" component={TabProfile}/>
        </Tab.Navigator>
    </>
    )
}

export default TabNavigator;