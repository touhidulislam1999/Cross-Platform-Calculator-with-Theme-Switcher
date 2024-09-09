import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

export const Button = ({ onPress, title, isBlue, isGray }: ButtonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
