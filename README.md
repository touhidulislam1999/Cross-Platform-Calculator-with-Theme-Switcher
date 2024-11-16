# 🧮 Cross-Platform Calculator with Theme Switcher



## 📜 **Project Description**
This project is a cross-platform calculator app built with **React Native** and **Expo**, designed for seamless use on both **iOS** and **Android**. It features basic arithmetic operations, responsive UI, and a toggle between light and dark themes for better accessibility.

---

## ⚙️ **Key Features**
- **Basic Arithmetic Operations:** Addition, subtraction, multiplication, and division.
- **Dynamic Calculations:** Provides real-time results as users input numbers and operations.
- **Theme Switcher:** Toggle between light and dark themes for different environments.
- **Cross-Platform Compatibility:** Works effortlessly on both iOS and Android devices.
- **Intuitive Design:** Clean and user-friendly interface with responsive buttons and layouts.

---

## 📂 **File Details**

### 1. **Button.tsx**
- Reusable button component with dynamic styling based on props (`isBlue`, `isGray`) and theme settings.
- Handles button press events and displays appropriate labels.

### 2. **MyKeyBoard.tsx**
- Manages the calculator’s input and logic.
- Tracks operands, operations, and results using state hooks.
- Displays results dynamically and handles special functions like clear (`C`) and calculate (`=`).

### 3. **ThemeContext.tsx**
- Provides global theme management for light and dark modes.
- Allows dynamic updates to the app's style based on user preference.

### 4. **Colors.tsx**
- Defines a consistent color palette for light and dark themes.
- Provides primary colors for buttons and special elements like result text.

### 5. **GlobalStyles.tsx**
- Ensures consistent design with global styles for buttons, text, and layouts.
- Simplifies styling across components.

### 6. **App.tsx**
- The main entry point that sets up the app structure and theme switching.
- Renders the calculator keyboard and manages the overall layout.

---
## 📸 Preview  
![Calculator Demo](https://github.com/user-attachments/assets/c566cc6b-0b98-4582-96cd-da561d274957)
![Calculator Demo](https://github.com/user-attachments/assets/19a36922-a85a-4ab7-b3ce-5fcc90849266)

---

## 🛠️ **How to Use**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/touhidulislam1999/Cross-Platform-Calculator-with-Theme-Switcher.git
