import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Home from "./index";
import Colors from "../utils/colors";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: { backgroundColor: Colors.GREEN, height: "100%" },
});
