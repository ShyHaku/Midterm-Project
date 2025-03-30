// AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jobs from '../screens/Jobs';
import Saved from '../components/Saved';
import Application from '../components/Application';
import { SavedJobsProvider } from '../context/SavedJobsContext';

const Stack = createStackNavigator();

interface AppNavigatorProps {
  savedJobs: Job[];
  setSavedJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const AppNavigator: React.FC<AppNavigatorProps> = ({
  savedJobs,
  setSavedJobs,
  darkMode,
  toggleDarkMode
}) => {
  return (
    <SavedJobsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="JobFinder">
          {/* Pass darkMode and toggleDarkMode to screens */}
          <Stack.Screen name="JobFinder">
            {(props) => (
              <Jobs
                {...props}
                savedJobs={savedJobs}
                setSavedJobs={setSavedJobs}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="SavedJobs">
            {(props) => <Saved {...props} darkMode={darkMode} />}
          </Stack.Screen>
          <Stack.Screen name="ApplicationForm">
            {(props) => <Application {...props} darkMode={darkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SavedJobsProvider>
  );
};

export default AppNavigator;
