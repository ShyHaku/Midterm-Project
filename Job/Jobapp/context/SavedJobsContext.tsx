import React, { createContext, useState, ReactNode } from 'react';
import { Job } from '../types/types';

interface SavedJobsContextType {
  savedJobs: Job[];
  setSavedJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

export const SavedJobsContext = createContext<SavedJobsContextType | undefined>(undefined);

interface SavedJobsProviderProps {
  children: ReactNode;
}

export const SavedJobsProvider: React.FC<SavedJobsProviderProps> = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  return (
    <SavedJobsContext.Provider value={{ savedJobs, setSavedJobs }}>
      {children}
    </SavedJobsContext.Provider>
  );
};
