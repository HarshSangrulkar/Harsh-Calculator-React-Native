import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const Brackets = () => {
  const isLastCharBracket = (input: string): boolean => {
    if (input.length === 0) return false; // If empty, return false

    //if last char is operator, then dont allow evaluation
    const lastChar = input.charAt(input.length - 1);
    return [")"].includes(lastChar);
  };
  const isLastCharOpenBracket = (input: string): boolean => {
    if (input.length === 0) return false;
    return input.charAt(input.length - 1) === "(";
  };

  const bracketCount = (str: string) => {
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (char === "(") {
        openCount++; // Increment open bracket count
      } else if (char === ")") {
        closeCount++; // Increment close bracket count
      }
    }

    return openCount == closeCount;
  };
  const [str, setstr] = useState("");
  return <View></View>;
};

export default Brackets;

//if open then should end
//number of open == number of end brackets
//if cases not followed dont allow evaluation

//count
// for(i=0;i<.length){
//     if(i=="(")then count+1
//     else if(i==")")then count2 +1
// }

//last char should not be open bracket