import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: "center",
    margin: 8,
    textAlign: "center",
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.dark,
    justifyContent: "center",
    margin: 8,
    textAlign: "center",
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    justifyContent: "center",
    margin: 8,
    textAlign: "center",
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.darkGray,
    justifyContent: "center",
    margin: 8,
    textAlign: "center",
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
    textAlign: "center",
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
    alignContent: "center",
    textAlign: "center",
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
    textAlign: "center",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
    textAlign: "center",
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
    alignContent: "center",
    textAlign: "center",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
    textAlign: "center",
  },
});
