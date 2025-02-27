import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonsProps {
  onPress: (value: string) => void;
}

const Buttons = ({ onPress }: ButtonsProps) => {
  return (
    <View style={styles.buttonContainer}>
      {/* First Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onPress("7")}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("8")}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("9")}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("/")}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onPress("4")}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("5")}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("6")}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("*")}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>

      {/* Third Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onPress("1")}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("2")}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("3")}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("+")}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Fourth Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onPress(".")}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("0")}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("b")}>
          <Text style={styles.buttonText}>b</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("-")}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Fifth Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onPress("(")}>
          <Text style={styles.buttonText}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress(")")}>
          <Text style={styles.buttonText}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("c")}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress("=")}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 5,
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    color: "black",
  },
});

export default Buttons;