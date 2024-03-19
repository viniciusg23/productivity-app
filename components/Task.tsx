import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native";
import { Octicons } from '@expo/vector-icons';
import Theme from "../constants/Theme";

interface ITaskProps {
    isCompleted: boolean
}

function Task(props: ITaskProps) {
    const colorScheme = useColorScheme();

    const [complete, setComplete] = useState<boolean>(props.isCompleted);

    const onHandleComplete = () => {
        setComplete(prev => !prev);
    }

    return (
        <View style={style.container}>
            {!complete ? (
                <TouchableOpacity activeOpacity={0.70} onPress={onHandleComplete}>
                    
                    <Octicons name="circle" size={36} color={Theme[colorScheme ?? 'light'].default} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity activeOpacity={0.70} onPress={onHandleComplete}>
                    <Octicons name="check-circle-fill" size={36} color={Theme[colorScheme ?? 'light'].tint} />
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Task;

const style = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 12,
        borderRadius: 12,
        marginBottom: 12
    },
    circleView: {
        width: 42,
        height: 42,
        borderRadius: 50,
        borderBlockColor: "#eeeeee",
        borderWidth: 3
    }
})