import { Button, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigatorScreens } from '../../App';
import { NewTaskStackNavigatorScreens } from "../new-task";
import Task from "../../components/Task";

    
function HomeScreen() {

    const navigation = useNavigation();

    const onHandlePress = () => {
        navigation.navigate("new-task/configuration-task" as never);
    };


    return (
        <ScrollView style={style.container}>
            

            <Task isCompleted={true}/>
            <Task isCompleted={false}/>
        </ScrollView>
    );
}

export default HomeScreen;

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: 12
    }
})