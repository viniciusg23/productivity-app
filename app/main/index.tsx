import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import MetricsScreen from './MetricsScreen';
import { Button, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigatorScreens } from '../../App';
import Theme from '../../constants/Theme';


const Tab = createBottomTabNavigator();

function MainLayout() {

    const colorScheme = useColorScheme();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorScreens>>();

    const onHandlePress = () => {
        navigation.navigate("new-task");
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Theme[colorScheme ?? "light"].tint
            }}
        >
            <Tab.Screen
                name="index"
                component={HomeScreen}
                options={{
                    title: "Home",
                    headerRight: () => (
                        <TouchableOpacity onPress={onHandlePress} >
                            <Ionicons name="add-circle" size={24} style={{marginRight: 12}}/>
                        </TouchableOpacity>
                    ),
                    headerTitleContainerStyle: {
                        paddingHorizontal: 50
                    },
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="list" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="metrics"
                component={MetricsScreen}
                options={{
                    title: "Metrics",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="analytics-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="settings"
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default MainLayout;