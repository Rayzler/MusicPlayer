import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <SafeAreaProvider>
            <RootNavigation />

            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}

const RootNavigation = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }} />
        </Stack>
    );
};

export default Layout;