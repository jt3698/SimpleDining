import * as React from "react";
import {
  View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity
} from "react-native";

export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

interface CartProps {
  navigation: any;
}

export default ({ navigation }: CartProps) => (
  <TouchableOpacity onPress={() => navigation.navigate("ViewCart")}>
    <View style={styles.button}>
      <Text style={styles.label}>View Cart</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#1ed760",
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    borderRadius: 32,
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});
