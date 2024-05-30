import React from "react";
import { FlatList } from "react-native";
import library from "@/assets/data/library.json";
import TrackListItem from "@/components/TrackListItem";
import { Track } from "@/types/types";

const TracksList = () => {
    const tracks: Track[] = library.map((track) => ({
        title: track.title,
        url: track.url,
        artist: track.artist || undefined,
        image: track.artwork || undefined
    }));

    return (
        <FlatList data={tracks} renderItem={
            ({ item: track }) => <TrackListItem track={track} />
        } />
    );
};

export default TracksList;