import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  jobFinderScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  darkMode: {
    backgroundColor: '#333',
  },
  darkText: {
    color: '#fff',
  },

  searchBarAndIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  jobFinderScreenSearchBar: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#C1A56D',
    borderRadius: 8,
  },

  darkModeTextInput: {
    color: '#fff',
    backgroundColor: '#333',
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '20%',
  },

  icon: {
    marginLeft: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  jobCard: {
    backgroundColor: '#D4C8A8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#C1A56D',
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5A4E3D',
    marginBottom: 8,
  },
  jobCompany: {
    fontSize: 16,
    color: '#6B4F31',
    marginBottom: 6,
  },

  removeButton: {
    backgroundColor: '#F44336',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  jobFinderScreenNoJobsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#5A4E3D',
  },

  applicationFormScreenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  applicationFormInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
    borderColor: '#C1A56D',
  },

  applicationFormButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  applicationFormButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  darkApplicationFormInput: {
    borderColor: '#fff',
    color: '#fff',
  },

  darkApplicationFormButton: {
    backgroundColor: '#555',
  },

  darkApplicationFormButtonText: {
    color: '#fff',
  },
});

export default styles;
