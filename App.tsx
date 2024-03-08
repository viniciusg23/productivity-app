import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import HomePage from './src/pages/HomePage';
import MetricsPage from './src/pages/MetricsPage';
import SettingsPage from './src/pages/SettingsPage';

interface IScreens {
    home: React.JSX.Element;
    metrics: React.JSX.Element;
    settings: React.JSX.Element;
}

const screensConfig: IScreens = {
    "home": <HomePage />,
    "metrics": <MetricsPage />,
    "settings": <SettingsPage />
}

function App() {

    const [screen, setScreen] = useState<keyof IScreens>("home");

    const onHandleScreen = (screen: keyof IScreens) => {
        setScreen(screen);
    }

    return (
        <SafeAreaView style={styles.container}>

            

            {screen && (
                screensConfig[screen]
            )}

            <View style={styles.screenControl}>
                <Button title="Home" onPress={() => onHandleScreen("home")} />
                <Button title="Metrics" onPress={() => onHandleScreen("metrics")} />
                <Button title="Settings" onPress={() => onHandleScreen("settings")} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screenControl: {
        position: "absolute",
        bottom: "0%",
        width: "100%",
        backgroundColor: "#eeeeee",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        paddingBottom: 35
    }
});

export default App;


