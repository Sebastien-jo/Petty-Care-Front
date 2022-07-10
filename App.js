import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Install from "./Screens/Install";
import CGU from "./Screens/CGU";
import Home from './Screens/Home';
import Login from "./Screens/Login";
import Confidential from "./Screens/Confidential";
import Welcome from "./Screens/Welcome";
import Profile from "./Screens/Profile";
import ConnectToy from "./Screens/ConnectToy";
import ConnectActive from "./Screens/ConnectActive";
import AnimalParameters from "./Screens/AnimalParameters";
import UserParameters from "./Screens/UserParameters";
import TabNavigator from "./Navigation/TabNavigator";
import {UserProfileContext} from "./Context/UserProfileContext";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Install" component={Install}/>
                <Stack.Screen name="CGU" component={CGU}/>
                <Stack.Screen name="Confidential" component={Confidential}/>

                {/* <UserProfileContext.Provider> */}
                    <Stack.Screen name="Welcome" component={Welcome}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                    <Stack.Screen name="ConnectToy" component={ConnectToy}/>
                    <Stack.Screen name="ConnectActive" component={ConnectActive}/>
                    <Stack.Screen name="Connexion" component={Login}/>
                    <Stack.Screen name="AnimalParameters" component={AnimalParameters}/>
                    <Stack.Screen name="UserParameters" component={UserParameters}/>
                    <Stack.Screen name="TabPlay" component={TabNavigator} options={{headerShown: false}}/>
                    <Stack.Screen name="TabDashboard" component={TabNavigator} options={{headerShown: false}}/>
                    <Stack.Screen name="TabProfile" component={TabNavigator} options={{headerShown: false}}/>
                    <Stack.Screen name="TabAccount" component={TabNavigator} options={{headerShown: false}}/>
                {/* </UserProfileContext.Provider>*/}

            </Stack.Navigator>

        </NavigationContainer>
    );
}
