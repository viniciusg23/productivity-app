import { ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Task from "../components/Task";

function HomeScreen(){

    return(
        <ScrollView style={sytles.container}>
            <Task />
        </ScrollView>
    );
}

const sytles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default HomeScreen;
