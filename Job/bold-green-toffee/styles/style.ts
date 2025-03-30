import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Main screen container for Job Finder
  jobFinderScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  // Dark Mode Styles
  darkMode: {
    backgroundColor: '#333',
  },
  darkText: {
    color: '#fff',
  },

  // Search Bar and Icons container
  searchBarAndIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns items vertically centered
    width: '100%',
    justifyContent: 'space-between',  // Spaces the search bar and icons equally
    marginBottom: 10,
  },

  // Search Bar Styles
  jobFinderScreenSearchBar: {
    height: 40,
    width: '80%', // Adjust to give space for the icons
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#C1A56D',  // Earthy border color for search bar
    borderRadius: 8,
  },

  // Dark Mode TextInput Style
  darkModeTextInput: {
    color: '#fff', // White text color for dark mode
    backgroundColor: '#333', // Dark background color for input field
  },

  // Icons container and styling (beside the search bar)
  iconsContainer: {
    flexDirection: 'row',  // Align icons horizontally
    justifyContent: 'flex-end', // Position icons to the right side
    alignItems: 'center', // Center icons vertically
    width: '20%', // Reserve space for the icons
  },

  // Icon styles
  icon: {
    marginLeft: 10,
  },

  // Button Container (Buttons side by side)
  buttonContainer: {
    flexDirection: 'row',  // Align buttons side by side
    justifyContent: 'space-between',  // Space buttons equally
    marginTop: 10,
  },

  // Button Styling (Apply Now)
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Green color for Apply Now buttons
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Job Card Styles for SavedJobsScreen
  jobCard: {
    backgroundColor: '#D4C8A8',  // Light beige background for job cards
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#C1A56D',  // Warm earthy border color
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5A4E3D',  // Earthy brown color for title text
    marginBottom: 8,
  },
  jobCompany: {
    fontSize: 16,
    color: '#6B4F31',  // Slightly darker brown for company names
    marginBottom: 6,
  },

  // Remove Job Button with Earth Tone Style
  removeButton: {
    backgroundColor: '#F44336',  // Earthy red color for Remove button
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // No Jobs Text Styling
  jobFinderScreenNoJobsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#5A4E3D',
  },

  // Application Form Screen Styles
  applicationFormScreenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Default background color
  },

  applicationFormInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
    borderColor: '#C1A56D', // Earthy border color for inputs
  },

  applicationFormButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',  // Green button background
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Button text
  applicationFormButtonText: {
    color: 'white', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Dark Mode Styles for Application Form
  darkApplicationFormInput: {
    borderColor: '#fff',
    color: '#fff',
  },

  darkApplicationFormButton: {
    backgroundColor: '#555',
  },

  darkApplicationFormButtonText: {
    color: '#fff', // White text in dark mode for the button
  },
});

export default styles;
