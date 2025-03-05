import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Display from "./Display";
import Buttons from "./Buttons";
import Brackets from "./Brackets";


const CalculatorLogic = () => {
  const isLastCharOperator = (input: string): boolean => {
    if (input.length === 0) return false; // If empty, return false

    //if last char is operator, then dont allow evaluation
    const lastChar = input.charAt(input.length - 1);
    return ["+", "-", "*", "/"].includes(lastChar);
  };

  const isLastCharOpenBracket = (input: string): boolean => {
    if (input.length === 0) return false; // If empty, return false

    //if last char is operator, then dont allow evaluation
    return input.charAt(input.length - 1) === "(";
  };

  const bracketCount = (input: string): boolean => {
    let openCount = 0;
    let closeCount = 0;
    // let balance = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (char === "(") {
        openCount++; // Increment open bracket count
      }
      if (char === ")") {
        closeCount++; // Decrement close bracket count

        if (openCount < closeCount) {
          return false;
        }
      }
    }
    return openCount == closeCount;
  };

  const [input, setInput] = useState("");

  const handlePress = (value: string) => {
    switch (value) {
      case "c": // Clear Input
        setInput("");
        break;

      case "b": // Backspace
        setInput(input.slice(0, -1));
        break;

      case "=":
        if (
          input === "" ||
          isLastCharOperator(input) ||
          isLastCharOpenBracket(input) ||
          !bracketCount(input)
        )
          return;
        //const result = eval(input);
        //setInput(String(result)); //result appended to setInput

        try {
          const result = eval(input);
          setInput(String(result));
        } catch (error) {
          setInput("Error");
        }

        break;

      case "+":
      case "-":
      case "*":
      case "/":
        if (input === "" || isLastCharOperator(input)) return;
        setInput(input + value);
        break;
      case ".":
        // if (input.includes(".")) return;
        // setInput(input + value);
        // break;

        const lastNumber = input.split(/[\+\-\*\/\(\)]/).pop(); // Get last number
        if (lastNumber?.includes(".")) return; // Prevent multiple decimals in one number
        setInput(input + value);
        break;

      case "(":
        setInput(input + value);
        break;
      case ")":


        let openCount = 0;
        let closeCount = 0;

        for (let i = 0; i < input.length; i++) {
          if (input[i] === "(") openCount++;
          if (input[i] === ")") closeCount++;
        }

        if (openCount <= closeCount) return; // Prevent unbalanced closing bracket
        if (isLastCharOperator(input) || input === "") return; // Prevent invalid closing brackets

        setInput(input + value);
        break;
      default: // Number
        setInput(input + value);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Display input={input} />
      <Buttons onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});

export default CalculatorLogic;