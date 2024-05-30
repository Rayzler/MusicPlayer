import React from "react";
import { Tabs } from "expo-router";
import { colors, fontSize } from "@/constants/tokens";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from "@expo/vector-icons";

const Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: {
                fontSize: fontSize.xs,
                fontWeight: "500"
            },
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopWidth: 0,
                paddingTop: 0
            },
            tabBarBackground: () => <BlurView intensity={25} style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }} />
        }}>
            <Tabs.Screen options={{
                tabBarIcon: ({ color }) => <FontAwesome name={"heart"} size={20} color={color} />
            }} name="favorites" />
            <Tabs.Screen options={{
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name={"playlist-play"} size={28} color={color} />
            }} name="playlists" />
            <Tabs.Screen options={{
                tabBarIcon: ({ color }) => <Ionicons name={"musical-notes-sharp"} size={24} color={color} />
            }} name="(songs)" />
            <Tabs.Screen options={{
                tabBarIcon: ({ color }) => <FontAwesome6 name={"users"} size={20} color={color} />
            }} name="artists" />
        </Tabs>
    );
};

export default Layout;