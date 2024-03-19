import { useNavigation } from "@react-navigation/native";
import { Text, Button } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NewTaskStackNavigatorScreens } from ".";


function NewTaskScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<NewTaskStackNavigatorScreens>>();

    const onHandlePress = () => {
        navigation.navigate("configuration-task");
    }

    return (
        <>
            <Text>New Task Screen</Text>
            <Button title="Go to configuration task" onPress={onHandlePress} />
        </>
    );
}

export default NewTaskScreen;