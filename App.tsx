import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CalculatorLogic from "./components/CalculatorLogic";
// CalculatorLogic;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorLogic />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default App;