import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Chef's App</Text>
      <Text style={styles.subtitle}>Manage and Display Your Menu Items with Ease</Text>
      <Link href="/HomePage">
        <Button title="Go to Home" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  welcomeText: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 16, marginBottom: 30, textAlign: 'center' },
});

export default WelcomeScreen;
