import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from "./Components/Welcome"

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='Journal' component={Welcome} options={{headerShown: false,   tabBarIcon: () => (<Image source={require("./assets/HomeIcon.png")} style={{width: 30, height: 30}} />)}} />
        <Tab.Screen name='Profil' component={Welcome} options={{headerShown: false,   tabBarIcon: () => (<Image source={require("./assets/CatIcon.png")} style={{width: 30, height: 30}} />)}} />
        <Tab.Screen name='Jouer' component={Welcome} options={{headerShown: false,   tabBarIcon: () => (<Image source={require("./assets/JouerIcon.png")} style={{width: 30, height: 30}} />)}} />
        <Tab.Screen name='Compte' component={Welcome} options={{headerShown: false,   tabBarIcon: () => (<Image source={require("./assets/CompteIcon.png")} style={{width: 30, height: 30}} />)}} />
    </Tab.Navigator>
}

export default TabNavigator 