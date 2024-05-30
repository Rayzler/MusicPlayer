import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors } from "@/constants/tokens";

export const StackScrennWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: "transparent"
    },
    headerStyle: {
        backgroundColor: "transparent"
    },
    headerLargeTitleStyle: {
        color: colors.text
    },
    headerTintColor: colors.text,
    headerTransparent: true,
    headerBlurEffect: "prominent",
    headerShadowVisible: false
};