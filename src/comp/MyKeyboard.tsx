import * as React from "react";
import { Text, View } from "react-native";
import { myColors } from "../styles/Colors";
import { Styles } from "../styles/GlobalStyles";
import { Button } from "./Button";

export default function MyKeyboard() {
  const [oldNumber, setOldNumber] = React.useState("");
  const [newNumber, setNewNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<number | null>(null);
  const [expression, setExpression] = React.useState(""); // New

  const handleNumberPress = (buttonValue: string) => {
    if (oldNumber.length < 10) {
      setOldNumber(oldNumber + buttonValue);
      setExpression(expression + buttonValue); // New
    }
  };

  const handleOperatorPress = (buttonValue: string) => {
    if (oldNumber !== "") {
      setOperation(buttonValue);
      setNewNumber(oldNumber);
      setOldNumber("");
      setExpression(expression + buttonValue); // New
    }
  };

  const clear = () => {
    setOldNumber("");
    setNewNumber("");
    setOperation("");
    setResult(null);
    setExpression(""); // New
  };

  const getResult = () => {
    let calculatedResult; // New
    switch (operation) {
      case "+":
        setResult((calculatedResult = Number(oldNumber) + Number(newNumber)));
        break;
      case "-":
        setResult((calculatedResult = Number(newNumber) - Number(oldNumber)));
        break;
      case "*":
        setResult((calculatedResult = Number(oldNumber) * Number(newNumber)));
        break;
      case "/":
        setResult((calculatedResult = Number(newNumber) / Number(oldNumber)));
        break;
      default:
        clear();
        calculatedResult = 0;
        break;
    }
    setResult(calculatedResult); // New
    setOldNumber(calculatedResult.toString());
    setExpression(expression + " = " + calculatedResult); // New
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {oldNumber}
        </Text>
      );
    }
    if (oldNumber && oldNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{oldNumber}</Text>;
    }
    if (oldNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (oldNumber.length > 5 && oldNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {oldNumber}
        </Text>
      );
    }
    if (oldNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {oldNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {newNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" isGray onPress={() => handleOperatorPress("+/-")} />
        <Button title="%" isGray onPress={() => handleOperatorPress("%")} />
        <Button title="/" isGray onPress={() => handleOperatorPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isGray onPress={() => handleOperatorPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isGray onPress={() => handleOperatorPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isGray onPress={() => handleOperatorPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button
          title="CE"
          onPress={() => setOldNumber(oldNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={getResult} />
      </View>
    </View>
  );
}
