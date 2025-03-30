import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Text, Alert, ActivityIndicator } from 'react-native';
import { SavedJobsContext } from '../context/SavedJobsContext';  // Import the context
import { Job } from '../types/types';
import SearchBar from '../components/SearchBar';  // Import SearchBar
import JobCard from '../components/JobCard';  // Import JobCard
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the icon

const JobFinderScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { savedJobs, setSavedJobs } = useContext(SavedJobsContext); // Access context values

  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://empllo.com/api/v1');
      const data = await response.json();
      if (data && data.jobs) {
        const jobsWithIds: Job[] = data.jobs.map((job, index) => ({
          ...job,
          id: `${job.title}-${job.companyName}-${index}`,
        }));
        setJobs(jobsWithIds);
        setFilteredJobs(jobsWithIds);
      } else {
        Alert.alert('Error', 'No jobs found in the response.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch jobs.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const saveJob = (job: Job) => {
    if (!savedJobs.some(savedJob => savedJob.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
      Alert.alert('Success', 'Job saved successfully!');
    } else {
      Alert.alert('Info', 'Job already saved.');
    }
  };

  return (
    <View style={[styles.jobFinderScreenContainer, darkMode && styles.darkMode]}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.searchBarAndIconsContainer}>
            <SearchBar query={searchQuery} onChange={handleSearch} darkMode={darkMode} /> {/* Pass darkMode here */}

            <View style={styles.iconsContainer}>
              <Icon
                name={darkMode ? "moon" : "sunny"}
                size={30}
                color={darkMode ? 'white' : 'black'}
                style={styles.icon}
                onPress={() => setDarkMode(!darkMode)}
              />
              <Icon
                name="bookmark"
                size={30}
                color={darkMode ? 'white' : 'black'}
                style={styles.icon}
                onPress={() => navigation.navigate('SavedJobs')}
              />
            </View>
          </View>

          {filteredJobs.length === 0 ? (
            <Text style={[styles.jobFinderScreenNoJobsText, darkMode && styles.darkModeText]}>
              No jobs available
            </Text>
          ) : (
            <FlatList
              data={filteredJobs}
              renderItem={({ item }) => (
                <JobCard
                  job={item}
                  onSave={() => saveJob(item)}
                  onApply={() => navigation.navigate('ApplicationForm', { job: item })}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </>
      )}
    </View>
  );
};

export default JobFinderScreen;
