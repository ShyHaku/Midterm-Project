import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import styles from '../styles/style';

interface ApplicationFormProps {
  route: any;
  navigation: any;
  darkMode: boolean;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ route, navigation, darkMode }) => {
  const { job } = route.params;
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  const handleSubmit = () => {
    if (!name || !email || !contact || !reason) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

   Alert.alert('Application Submitted', 'Thank you for applying!', [
    { text: 'Okay', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'JobFinder' }] }) } // Replaces the current screen
  ]);
  

    setName('');
    setEmail('');
    setContact('');
    setReason('');
  };

  return (
    <View style={[styles.applicationFormScreenContainer, darkMode && styles.darkMode]}>
      <TextInput
        style={[styles.applicationFormInput, darkMode && { borderColor: '#fff', color: '#fff' }]}
        placeholder="Name"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.applicationFormInput, darkMode && { borderColor: '#fff', color: '#fff' }]}
        placeholder="Email"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.applicationFormInput, darkMode && { borderColor: '#fff', color: '#fff' }]}
        placeholder="Contact Number"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        value={contact}
        onChangeText={setContact}
      />
      <TextInput
        style={[styles.applicationFormInput, darkMode && { borderColor: '#fff', color: '#fff' }]}
        placeholder="Why should we hire you?"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        value={reason}
        onChangeText={setReason}
      />
      
      {/* Custom Submit Button */}
      <TouchableOpacity
        style={[styles.applicationFormButton, darkMode && { backgroundColor: '#555' }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.applicationFormButtonText, darkMode && { color: '#fff' }]}>
          Submit Application
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplicationForm;
