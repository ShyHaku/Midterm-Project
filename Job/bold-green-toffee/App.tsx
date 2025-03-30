// App.tsx
import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator'; // Adjust path as necessary
import { Job } from './types/types';

const App = () => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <AppNavigator
      savedJobs={savedJobs}
      setSavedJobs={setSavedJobs}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode} // Pass the toggle function here
    />
  );
};

export default App;
