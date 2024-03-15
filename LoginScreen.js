import React, { useState } from 'react';
import { View, Text, Button, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom Button Component
const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // For demonstration purposes, simply navigate back to the Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
     <ImageBackground source={require('./assets/temp.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <CustomButton
            title="Login"
            onPress={handleLogin}
          />
          <CustomButton 
            title="Back" 
            onPress={() => navigation.navigate('Home')} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)', // Adjust opacity here
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40, // Add this line to move everything down by 10 pixels
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#132a4a',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'DiaClone',
    color: 'white',
    fontSize: 50,
  },
});

export default LoginScreen;
