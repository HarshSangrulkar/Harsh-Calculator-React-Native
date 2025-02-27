import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface DisplayProps {
  input: string;
}

//this screen displays the result and calculations
const Display = ({ input }: DisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || " "}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  display: {
    fontSize: 40,
    color: "black",
    textAlign: "right",
  },
});

export default Display;