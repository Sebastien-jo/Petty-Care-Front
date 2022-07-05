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
import ConnectActive from "./Components/ConnectActive";
import TabPlay from "./Screens/TabPlay";
import TabDashboard from "./Screens/TabDashboard";
import TabProfile from "./Screens/TabProfile";
import TabAccount from "./Screens/TabAccount";
import AnimalParameters from "./Components/AnimalParameters";
import UserParameters from "./Components/UserParameters";
import TabNavigator from './Navigation/TabNavigator';

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
                <Stack.Screen name="ConnectActive" component={ConnectActive}/>
                <Stack.Screen name="TabPlay" component={TabPlay}/>
                <Stack.Screen name="TabDashboard" component={TabNavigator} options={{headerShown:false}}/>
                <Stack.Screen name="TabProfile" component={TabProfile}/>
                <Stack.Screen name="TabAccount" component={TabAccount}/>
                <Stack.Screen name="AnimalParameters" component={AnimalParameters}/>
                <Stack.Screen name="UserParameters" component={UserParameters}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
