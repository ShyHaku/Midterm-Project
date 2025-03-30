import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { SavedJobsContext } from '../context/SavedJobsContext';  // Import the context
import { Job } from '../types/types';
import styles from '../styles/style';

const SavedJobsScreen: React.FC = ({ navigation }) => {
  const { savedJobs, setSavedJobs } = useContext(SavedJobsContext); // Access savedJobs from context

  const removeJob = (jobId: string) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  return (
    <View style={styles.jobFinderScreenContainer}>
      {savedJobs.length === 0 ? (
        <Text style={styles.jobFinderScreenNoJobsText}>No saved jobs</Text>
      ) : (
        <FlatList
          data={savedJobs}
          renderItem={({ item }) => (
            <View style={styles.jobCard}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobCompany}>{item.companyName}</Text>
              {/* Button Container */}
              <View style={styles.buttonContainer}>
                {/* Apply button */}
                <TouchableOpacity
                  style={styles.button}  // Use consistent button styling
                  onPress={() => navigation.navigate('ApplicationForm', { job: item })}
                >
                  <Text style={styles.buttonText}>Apply Now</Text>
                </TouchableOpacity>
                {/* Remove Job button */}
                <TouchableOpacity
                  style={styles.removeButton}  // Use consistent remove button styling
                  onPress={() => removeJob(item.id)}
                >
                  <Text style={styles.buttonText}>Remove Job</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default SavedJobsScreen;
