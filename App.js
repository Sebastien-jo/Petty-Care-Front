import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Install from "./Components/Install";
import Home from './Components/Home';
import CGU from "./Components/CGU";
import Login from "./Components/Login";
import Confidential from "./Components/Confidential";
import Welcome from "./Components/Welcome";
import Profile from "./Components/Profile";
import ConnectToy from "./Components/ConnectToy";
import TabDashboard from "./Screens/TabDashboard";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Install" component={Install}/>
                <Stack.Screen name="CGU" component={CGU}/>
                <Stack.Screen name="Confidential" component={Confidential}/>
                <Stack.Screen name="Connexion" component={Login}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="ConnectToy" component={ConnectToy}/>
                <Stack.Screen name="TabDashboard" component={TabDashboard}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
