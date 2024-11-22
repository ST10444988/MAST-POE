import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Switch } from 'react-native'; // Use Switch from react-native
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define types for MenuItem and navigation props
type MenuItem = {
  dishName: string;
  course: 'Starters' | 'Mains' | 'Desserts';
  price: number;
  description: string;
};

type CourseSelectionScreenProps = {
  route: RouteProp<{ params: { menuItems: MenuItem[] } }>;
  navigation: NativeStackNavigationProp<any>;
};

const CourseSelectionScreen: React.FC<CourseSelectionScreenProps> = ({ route, navigation }) => {
  const { menuItems } = route.params;
  
  // Define the state with appropriate types
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [starters, setStarters] = useState<boolean>(false);
  const [mains, setMains] = useState<boolean>(false);
  const [desserts, setDesserts] = useState<boolean>(false);

  // Apply filter based on selected course types
  const applyFilter = () => {
    const selectedCourses = {
      Starters: starters,
      Mains: mains,
      Desserts: desserts,
    };

    const filtered = menuItems.filter(item => selectedCourses[item.course]);
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Menu by Course</Text>

      <View style={styles.checkboxContainer}>
        <Text>Starters</Text>
        <Switch value={starters} onValueChange={setStarters} />
      </View>

      <View style={styles.checkboxContainer}>
        <Text>Mains</Text>
        <Switch value={mains} onValueChange={setMains} />
      </View>

      <View style={styles.checkboxContainer}>
        <Text>Desserts</Text>
        <Switch value={desserts} onValueChange={setDesserts} />
      </View>

      <Button title="Apply Filter" onPress={applyFilter} />

      {/* Display Filtered Items */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemText}>
              {item.dishName} ({item.course}) - ${item.price}
            </Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  menuItem: { padding: 10, marginBottom: 10, backgroundColor: '#f0f0f0' },
  itemText: { fontWeight: 'bold' },
});

export default CourseSelectionScreen;
