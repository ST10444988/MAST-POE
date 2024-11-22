import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../Images/Logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to Chef's App</Text>
      <Text style={styles.subtitle}>Manage and Display Your Menu Items with Ease</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  welcomeText: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 16, marginBottom: 30, textAlign: 'center' },
});

export default WelcomeScreen;
