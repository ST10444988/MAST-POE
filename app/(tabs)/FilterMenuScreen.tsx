import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

// Define your types for the route parameters
type FilterMenuScreenRouteProp = RouteProp<{ params: { menuItems: any[] } }, 'params'>;

const FilterMenuScreen = () => {
  // Get route and navigation from hooks with proper types
  const route = useRoute<FilterMenuScreenRouteProp>();
  const navigation = useNavigation();

  // Set up state for selected course filter
  const { menuItems } = route.params || { menuItems: [] };
  const [selectedCourse, setSelectedCourse] = React.useState('Starters');

  // Filter items based on the selected course
  const filteredItems = menuItems.filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Menu by Course</Text>

      {/* Picker to select the course */}
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      {/* Display the filtered items */}
      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <View key={item.id} style={styles.menuItemContainer}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        ))
      ) : (
        <Text>No items found for this course</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    marginBottom: 20,
  },
  menuItemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    width: '100%',
    borderRadius: 5,
  },
});

export default FilterMenuScreen;
