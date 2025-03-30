import React from 'react';
import { View, Switch, Text } from 'react-native';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <Text style={{ marginRight: 10 }}>Dark Mode</Text>
      <Switch
        value={darkMode}
        onValueChange={setDarkMode}
      />
    </View>
  );
};

export default ThemeToggle;
