
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Install from "./Components/Install"
import Home from './Components/Home'
import CGU from "./Components/CGU"
import PolitiqueDeconfidentialité from './Components/PolitiqueDeconfidentialité'
import Login from "./Components/Login"


const Stack = createStackNavigator();
export default function App() {
  

  return (
   <NavigationContainer>
    <Stack.Navigator >
           <Stack.Screen name=" " component={Home}  />
           <Stack.Screen name="Install" component={Install}   />
           <Stack.Screen name="CGU" component={CGU}   />
           <Stack.Screen name="Politique de confidentialité" component={PolitiqueDeconfidentialité}   />
           <Stack.Screen name="Connexion" component={Login}   />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
});
