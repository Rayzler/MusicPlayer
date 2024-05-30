import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyle } from "@/styles";
import FastImage from "react-native-fast-image";

interface Props {
    track: {
        title: string;
        image?: string;
        artist?: string;
    };
}

const TrackListItem = ({ track }: Props) => {
    const isActiveTrack = false;

    return (
        <TouchableHighlight>
            <View style={styles.trackItemContainer}>
                <View>
                    <FastImage source={{
                        uri: track.image ?? unknownTrackImageUri,
                        priority: FastImage.priority.normal
                    }} style={{
                        ...styles.trackArtworkImage,
                        opacity: isActiveTrack ? 0.6 : 1
                    }} />
                </View>

                <View style={{ width: "100%" }}>
                    <Text numberOfLines={1} style={{
                        ...styles.trackTitleText,
                        color: isActiveTrack ? colors.primary : colors.text
                    }}>{track.title}</Text>

                    {
                        track.artist && (
                            <Text numberOfLines={1} style={styles.trackArtistText}>
                                {track.artist}
                            </Text>
                        )
                    }
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50
    },
    trackTitleText: {
        ...defaultStyle.text,
        fontSize: fontSize.sm,
        fontWeight: "600",
        maxWidth: "90%"
    },
    trackArtistText: {
        ...defaultStyle.text,
        fontSize: 14,
        color: colors.textMuted,
        marginTop: 4
    },
    trackItemContainer: {
        flexDirection: "row",
        columnGap: 14,
        alignItems: "center",
        paddingRight: 20
    }
});

export default TrackListItem;