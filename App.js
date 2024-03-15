import React, { useState, useEffect } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import NavigationProvider from './NavigationProvider';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterPage';
import { loadFontsAndSetup } from './FontLoader';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFontsAndSetup().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    // If the fonts are not loaded, you could return null or a simple loading component
    return null;
  }

  return (
    <NavigationProvider>
      {/* No need to pass navigation as a prop here */}
    </NavigationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

 
