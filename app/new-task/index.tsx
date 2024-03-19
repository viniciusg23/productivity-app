import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import NewTaskScreen from './NewTaskScreen';
import TaskConfigurationScreen from './TaskConfigurationScreen';
import { RootStackNavigatorScreens } from '../../App';

export type NewTaskStackNavigatorScreens = {
    "index": undefined;
    "configuration-task": undefined
}

const Stack = createNativeStackNavigator<NewTaskStackNavigatorScreens>();

function NewTaskLayout() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorScreens>>();


    const onHandlePress = () => {{
        navigation.goBack()
    }}

    return (
        <Stack.Navigator
            initialRouteName="index"
        >
            <Stack.Screen 
                name="index" 
                component={NewTaskScreen} 
                options={{
                    title: "Create New Task",
                    headerLeft: () => (
                        <View>
                            <Button title="Cancel" onPress={onHandlePress}/>
                        </View>
                    )
                }}
            />
            <Stack.Screen 
                name="configuration-task" 
                component={TaskConfigurationScreen} 
                options={{
                    title: "Task Configuration",
                    headerBackTitle: "Back",
                    headerRight: (props) => (
                        <View>
                            <Button title="Done" onPress={onHandlePress}/>
                        </View>
                    ),
                }}    
            />
        </Stack.Navigator>
    );
}


export default NewTaskLayout;
