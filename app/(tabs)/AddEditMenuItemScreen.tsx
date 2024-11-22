import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Import types from React Navigation
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the parameter types for the screen
type RootStackParamList = {
  AddEditMenuItem: { onSave: (item: any) => void; initialItem?: any };
};

// Define the props type for the AddEditMenuItemScreen component
type AddEditMenuItemScreenRouteProp = RouteProp<RootStackParamList, 'AddEditMenuItem'>;
type AddEditMenuItemScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddEditMenuItem'>;

interface AddEditMenuItemScreenProps {
  route: AddEditMenuItemScreenRouteProp;
  navigation: AddEditMenuItemScreenNavigationProp;
}

const AddEditMenuItemScreen: React.FC<AddEditMenuItemScreenProps> = ({ route, navigation }) => {
  const { onSave, initialItem } = route.params || {}; // Safe check for undefined params

  // Fallback values if no params are provided
  const [dishName, setDishName] = useState(initialItem ? initialItem.dishName : '');
  const [description, setDescription] = useState(initialItem ? initialItem.description : '');
  const [course, setCourse] = useState(initialItem ? initialItem.course : 'Starters');
  const [price, setPrice] = useState(initialItem ? initialItem.price : '');

  const saveItem = () => {
    if (onSave) {
      const newItem = { dishName, description, course, price };
      onSave(newItem);
      navigation.goBack();
    } else {
      console.error("onSave function is missing");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{initialItem ? 'Edit Menu Item' : 'Add New Menu Item'}</Text>
      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Save" onPress={saveItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
  picker: { marginBottom: 10 },
});

export default AddEditMenuItemScreen;
