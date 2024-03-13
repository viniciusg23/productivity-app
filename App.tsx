import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Application } from './src/backend/Application';
import { openDatabase, enablePromise, SQLiteDatabase } from "react-native-sqlite-storage";
import { readFile } from "react-native-fs";



import HomeScreen from './src/screens/HomeScreen';
import MetricsScreen from './src/screens/MetricsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { formatDate } from './src/utils/formatDate';
import { useEffect } from 'react';


const Tab = createBottomTabNavigator();

function App() {

    useEffect(() => {
        enablePromise(true);

        async function runApplication(){
            try {
                Application.db = await openDatabase({ name: "database.db", location: "default" });
                const query = await readFile("./src/backend/setup.sql", "utf8");

                await Application.db.transaction(async (tx) => {
                    await tx.executeSql(query);
                });

            } catch (error) {
                console.error("Error:\n", error);
            }
        }

        runApplication();
    }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarAllowFontScaling: true,
                    tabBarLabelStyle: {fontSize: 12},
                    tabBarStyle: {height: 85},
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="list" size={size + 4} color={color} />
                        ),
                        headerTitle: formatDate(new Date())
                    }}
                />
                <Tab.Screen
                    name="Metrics"
                    component={MetricsScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="analytics-outline" size={size + 4} color={color}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="settings-outline" size={size + 4} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({

});

export default App;


