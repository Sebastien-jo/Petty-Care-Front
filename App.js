
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Install from "./Components/Install"
import Home from './Components/Home'
import CGU from "./Components/CGU"
<<<<<<< HEAD
<<<<<<< Updated upstream


=======
import PolitiqueDeconfidentialité from './Components/PolitiqueDeconfidentialité'
import Login from "./Components/Login"
>>>>>>> 40c5b6a57ab092c72923c583ccd7a4f9cb2f5356

=======
import PolitiqueDeconfidentialité from './Components/PolitiqueDeconfidentialité'
import Login from "./Components/Login"
import Tab from './TabNavigator '
>>>>>>> Stashed changes

const Stack = createStackNavigator();
export default function App() {
  

  return (
   <NavigationContainer>
    <Stack.Navigator >
           <Stack.Screen name=" " component={Home}  />
           <Stack.Screen name="Install" component={Install}   />
           <Stack.Screen name="CGU" component={CGU}   />
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
           <Stack.Screen name="Politique de confidentialité" component={PolitiqueDeconfidentialité}   />
           <Stack.Screen name="Connexion" component={Login}   />
           <Stack.Screen name="Connexion" component={Login}   />
           <Stack.Screen name="Tab" component={TabNavigator}   />
>>>>>>> Stashed changes
=======
           <Stack.Screen name="Politique de confidentialité" component={PolitiqueDeconfidentialité}   />
           <Stack.Screen name="Connexion" component={Login}   />
>>>>>>> 40c5b6a57ab092c72923c583ccd7a4f9cb2f5356
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
});
