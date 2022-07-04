import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import TabDashboard from "../Screens/TabDashboard";
import TabProfile from "../Screens/TabProfile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerTitle: 'Journal', headerShown: true}} name="Journal" component={TabDashboard} style={styles.contentTab}/>

            <Tab.Screen options={{headerTitle: 'Profil', headerShown: true}} name="Profile" component={TabProfile} style={styles.contentTab}/>

            <Tab.Screen options={{headerTitle: 'Jouer', headerShown: true}} name="Profile" component={TabProfile} style={styles.contentTab}/>

            <Tab.Screen options={{headerTitle: 'Compte', headerShown: true}} name="Profile" component={TabProfile} style={styles.contentTab}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;