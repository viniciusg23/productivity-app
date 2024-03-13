import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { Octicons } from '@expo/vector-icons';


function Task() {

    const [complete, setComplete] = useState<boolean>(true);

    const onHandleComplte = () => {
        setComplete(prev => !prev)
    }

    return (
        <View style={styles.container}>

            {complete ? (
                <TouchableOpacity onPress={onHandleComplte} activeOpacity={0.75}>
                    <Octicons name="check-circle-fill" size={36} color="green" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={onHandleComplte} activeOpacity={0.75}>
                    <Octicons name="circle" size={36} color="grey" />
                </TouchableOpacity>
            )}

            <Text style={styles.title}>Comprar Leite</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    title: {
        fontSize: 20,
        fontWeight: "600"
    }
})

export default Task;
