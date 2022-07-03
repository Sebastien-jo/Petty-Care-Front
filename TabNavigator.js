import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";

import Welcome from "./Components/Welcome";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Journal" component={Welcome} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/Tap_Icon_Home.png")} style={styles.contentTab} />)}} />

                <Tab.Screen name="Profil" component={Welcome} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/Tap_Icon_Cat.png")} style={styles.contentTab} />)}} />

                <Tab.Screen name="Jouer" component={Welcome} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/Tap_Icon_Play.png")} style={styles.contentTab} />)}} />

                <Tab.Screen name="Compte" component={Welcome} options={{headerShown: false, tabBarIcon: () => (<Image source={require("./assets/Tap_Icon_Account.png")} style={styles.contentTab} />)}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create ({
    contentTab: {
        width: 30,
        height: 30
    }
})

export default TabNavigator