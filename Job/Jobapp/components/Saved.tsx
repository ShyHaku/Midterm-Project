import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { SavedJobsContext } from '../context/SavedJobsContext'; 
import { Job } from '../types/types';
import styles from '../styles/style';

const SavedJobsScreen: React.FC = ({ navigation }) => {
  const { savedJobs, setSavedJobs } = useContext(SavedJobsContext);

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

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('ApplicationForm', { job: item })}
                >
                  <Text style={styles.buttonText}>Apply Now</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.removeButton}  
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
