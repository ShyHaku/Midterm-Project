import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/style';

interface SearchBarProps {
  query: string;
  onChange: (text: string) => void;
  darkMode: boolean; 
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange, darkMode }) => {
  return (
    <TextInput
      style={darkMode ? [styles.jobFinderScreenSearchBar, styles.darkModeTextInput] : styles.jobFinderScreenSearchBar}
      placeholder="Search jobs..."
      placeholderTextColor={darkMode ? 'white' : 'black'} 
      value={query}
      onChangeText={onChange}
    />
  );
};

export default SearchBar;
