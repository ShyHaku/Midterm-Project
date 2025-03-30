import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Job } from '../types/types';
import styles from '../styles/style';

interface JobCardProps {
  job: Job;
  onSave: () => void;
  onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSave, onApply }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSaveJob = () => {
    if (!isSaved) {
      setIsSaved(true);
      onSave(); 
    }
  };

  return (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.jobCompany}>{job.companyName}</Text>
      <Text style={styles.jobSalary}>${job.salary}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isSaved ? '#8B4513' : '#6B8E23' }]}
          onPress={handleSaveJob}
        >
          <Text style={styles.buttonText}>{isSaved ? 'Saved' : 'Save Job'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#8B4513' }]}
          onPress={onApply}
        >
          <Text style={styles.buttonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobCard;
