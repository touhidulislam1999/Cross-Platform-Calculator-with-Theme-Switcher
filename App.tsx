import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text } from "react-native";
import MyKeyboard from "./src/comp/MyKeyboard";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <Text style={theme === "light" ? styles.textDark : styles.textLight}>
          Tota's Calculator
        </Text>
        <StatusBar style="auto" />

        <Switch
          value={theme === "dark"}
          onValueChange={(value) => setTheme(value ? "dark" : "light")}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textLight: {
    color: myColors.light,
  },
  textDark: {
    color: myColors.dark,
  },
});
