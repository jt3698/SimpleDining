import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements'
import { RootTabScreenProps } from '../../../types';
import { Track } from "./Model";

interface TrackProps {
  track: Track;
  artist: string;
  index: number;
  navigation: any;
}

export default ({ track, artist, index, navigation }: TrackProps) => (
  <TouchableOpacity onPress={() => navigation.navigate("BrowseFood")}>
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
  </TouchableOpacity>
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
