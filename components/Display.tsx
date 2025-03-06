import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface DisplayProps {
  input: string;
  result: string;
}

//this screen displays the result and calculations
const Display = ({ input, result }: DisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || " "}</Text>
      <Text style={styles.result}>{result || " "}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "lightgray",
    padding: 10,
    paddingTop: 0,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: "flex-end",

  },
  display: {
    fontSize: 40,
    color: "black",
    textAlign: "right",
    textAlignVertical: "bottom",
    height: "40%",
  },
  result: {
    fontSize: 40,
    color: "black",
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 5,
  }
});

export default Display;