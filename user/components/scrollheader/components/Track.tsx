import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements'

import { Track } from "./Model";

interface TrackProps {
  track: Track;
  artist: string;
  index: number;
}

export default ({ track, artist, index }: TrackProps) => (
  <View style={styles.row}>
    <Avatar source={{uri: track.avatar_url}} />
    <View style={[styles.cell, { flex: 1 }]}>
      <Text style={styles.artist}>{track.time || artist}</Text>
      <Text style={styles.name}>{track.name}</Text>
      <Text style={styles.artist}>{track.address || artist}</Text>
      <Text style={styles.artist}>{track.tags || artist}</Text>
    </View>
    <View style={styles.cell}>
      <Icon name="more-horizontal" color="#b2b3b4" size={24} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "white",
    textAlignVertical: "center"
  },
  cell: {
    padding: 16,
    justifyContent: "center",
  },
  index: {
    color: "#b2b3b4",
  },
  artist: {
    fontSize: 12,
    color: "#b2b3b4",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
