import React from "react";
import { View } from "react-native";
import { defaultStyle } from "@/styles";
import { Stack } from "expo-router";
import { StackScrennWithSearchBar } from "@/constants/layout";

const Layout = () => {
    return (
        <View style={defaultStyle.container}>
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScrennWithSearchBar,
                    headerTitle: "Favorites"
                }} />
            </Stack>
        </View>
    );
};

export default Layout;