import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Avatar, Button } from 'react-native-elements'
import { RootTabScreenProps } from '../../../types';
import { Track } from "./Model";
import { ThemeProvider } from "@react-navigation/native";

interface TrackProps {
  track: Track;
  artist: string;
  index: number;
  navigation: any;
}

export default ({ track, artist, index, navigation }: TrackProps) => (
  <TouchableOpacity onPress={() => navigation.navigate("BrowseFood")}>
  <View style={styles.row}>
    <Avatar containerStyle={{marginLeft:10}} source={{uri: track.avatar_url}} />
    <View style={[styles.cell, { flex: 1 }, {marginLeft:10}]}>
      <Text style={styles.artist}>{track.time || artist}</Text>
      <Text style={styles.name}>{track.name}</Text>
      <Text style={styles.artist}>{track.address || artist}</Text>
      <Text style={styles.artist}>{track.tags || artist}</Text>
    </View>
      <Button title={track.rating.toString()} buttonStyle={{width:40, height:40, borderRadius:20 ,backgroundColor: getBackgroundColor(track.rating)}}> </Button>
    <View style={styles.cell}>
      <Icon name="more-horizontal" color="#b2b3b4" size={24} />
    </View>
  </View>
  </TouchableOpacity>
);

const getBackgroundColor = (rating: any) => {
  let color;
  if (rating === 0) {
      color = 'red';
  } else if (rating >= 1 && rating < 2.5) {
      color = 'red';
  } else if (rating >= 2.5 && rating < 3) {
      color = '#f7b307';
  } else if (rating >= 3 && rating < 4) {
      color = 'lime';
  } else if (rating >= 4) {
      color = 'green';
  }
  return color;
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    fontSize: 3,
 }, 
  row: {
    flexDirection: "row",
    backgroundColor: "white",
    textAlignVertical: "center",
    alignItems:"center",
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
