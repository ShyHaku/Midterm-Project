import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
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
      toggleDarkMode={toggleDarkMode} 
    />
  );
};

export default App;
