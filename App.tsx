import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./app/main";
import NewTask from "./app/new-task";

export type RootStackNavigatorScreens = {
    "main": undefined;
    "new-task": undefined;
};


const Stack = createNativeStackNavigator<RootStackNavigatorScreens>();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="main"
                screenOptions={{
                    // headerBackVisible: true,
                    // headerBackTitle: true
                    // headerTitleStyle: {}
                }}
            >
                <Stack.Screen 
                    name="main" 
                    component={Main} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="new-task" 
                    component={NewTask} 
                    options={{
                        headerShown: false,
                        presentation: "modal",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        // margin: 0
    }
})