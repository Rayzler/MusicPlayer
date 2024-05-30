import React from "react";
import { ScrollView, Text, View } from "react-native";
import { defaultStyle } from "@/styles";
import TracksList from "@/components/TracksList";

const Index = () => {
    return (
        <View style={defaultStyle.container}>
            <ScrollView>
                <TracksList />
            </ScrollView>
        </View>
    );
};

export default Index;