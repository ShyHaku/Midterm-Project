import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/style'; // Import styles

interface SearchBarProps {
  query: string;
  onChange: (text: string) => void;
  darkMode: boolean; // Pass darkMode state as a prop to control text color
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange, darkMode }) => {
  return (
    <TextInput
      style={darkMode ? [styles.jobFinderScreenSearchBar, styles.darkModeTextInput] : styles.jobFinderScreenSearchBar}
      placeholder="Search jobs..."
      placeholderTextColor={darkMode ? 'white' : 'black'} // Lighter placeholder text in dark mode
      value={query}
      onChangeText={onChange}
    />
  );
};

export default SearchBar;
