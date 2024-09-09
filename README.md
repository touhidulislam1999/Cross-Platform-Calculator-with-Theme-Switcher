#Introduction
This project is a cross-platform calculator app built using React Native and Expo, designed for both iOS and Android. The app supports basic arithmetic operations and features a toggle between light and dark themes. It also includes responsive UI elements and dynamic calculations that provide real-time results. The app’s user interface is styled to be intuitive, and it showcases theme adaptability with a switch button for dark and light modes.

HFile Details
**Button.tsx**
***Purpose:***
This file defines a reusable button component that dynamically changes its style based on the props passed (such as isBlue, isGray, or theme settings from the context). It handles button press events and renders text according to the theme.
***Key Props:***

***=>***onPress: Function to handle button press.
***=>***title: Label displayed on the button.
***=>***isBlue / isGray: Boolean values to apply specific button styles.

**MyKeyBoard.tsx**
***Purpose:***
This component represents the calculator’s keypad and manages the state for handling user input (numbers, operators, and results). It includes functions to handle number and operator presses, clear input, and calculate results.
***Key Features:***

***=>***Manages input through state hooks (oldNumber, newNumber, operation, etc.).
***=>***Displays the current expression and result on the screen.
***=>***Handles basic arithmetic operations (+, -, *, /) and special buttons like C (clear) and = (calculate).

**ThemeContext.tsx**
***Purpose:***
This file provides a ThemeContext to switch between light and dark themes. It uses React's createContext to manage the global theme state, which is accessed across the app to dynamically change styles.
***Key Feature:***

***=>***ThemeContext provides global theme access throughout the app.

**Colors.tsx**
***Purpose:***
This file contains the color palette used for styling the app. It defines multiple color values like blue, dark, light, gray, and result. These colors are referenced in the styling components to maintain consistency across different UI elements.
***Key Colors:***

***=>***Light and dark themes (light, dark).
***=>***Primary button colors (blue, gray).
***=>***Special colors like result for displaying results.

**GlobalStyles.tsx**
***Purpose:***
This file holds the global styling for buttons, text, and screen elements. It ensures a cohesive design language across the app by providing consistent styles for various UI components, including button dimensions, text sizes, and layout alignment.
***Key Styles:***

***=>***btnBlue, btnGray, btnLight: Styles for different button types.
***=>***screenFirstNumber, screenSecondNumber: Styles for displaying the calculator screen content (numbers and operations).
***=>***viewBottom: Manages the layout for the keypad.

**App.tsx**
***Purpose:***
This is the main entry point of the app. It sets up the theme context provider, handles the theme switch (dark/light), and renders the calculator keyboard component. It also manages the basic structure and layout of the app.
***Key Features:***

***=>***Theme switching using the Switch component.
***=>***Main UI setup with SafeAreaView and status bar configuration.
***=>***Renders MyKeyboard to display the calculator's keypad.

![IMG_5239](https://github.com/user-attachments/assets/c566cc6b-0b98-4582-96cd-da561d274957)

![IMG_5240](https://github.com/user-attachments/assets/19a36922-a85a-4ab7-b3ce-5fcc90849266)


#Use Cases in Daily Life
**1. Basic Calculator for Daily Calculations:**
This app can be used for simple daily arithmetic operations like addition, subtraction, multiplication, and division. Its clean and intuitive interface makes it ideal for quick, on-the-go calculations.

**2. Cross-Platform Availability:**
The app works seamlessly on both iOS and Android, making it useful for users who switch between devices but need a consistent calculator experience.

**3. Theme Switching for Better Accessibility:**
The dark and light theme options allow users to switch between modes depending on their environment, making it easier to use in both bright and low-light conditions.

**4. Learning Project for React Native Enthusiasts:**
The app serves as a great learning resource for beginner developers looking to understand how to build a fully functional cross-platform app with React Native, Expo, and context-based theme switching.
