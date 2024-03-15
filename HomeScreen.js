import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ImageBackground } from 'react-native';

// Custom Button Component
const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const HomeScreen = () => {
    const [view, setView] = useState('buttons'); // 'buttons', 'login', or 'register'

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/temp.png')} style={styles.backgroundImage}>
                {view === 'buttons' && (
                    <View style={styles.buttonContainer}>
                        <CustomButton title="Login" onPress={() => setView('login')} />
                        <CustomButton title="Register" onPress={() => setView('register')} />
                    </View>
                )}
                {(view === 'login' || view === 'register') && (
                    <View style={styles.overlay}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            // Add state management for email if necessary
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            // Add state management for password if necessary
                        />
                        {view === 'register' && (
                            // Add any additional input fields for registration here
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                secureTextEntry
                                // Add state management for confirm password if necessary
                            />
                        )}
                        <CustomButton
                            title={view === 'login' ? "Login" : "Register"}
                            // Add your login or register logic here
                        />
                        <CustomButton
                            title="Back"
                            onPress={() => setView('buttons')}
                        />
                    </View>
                )}
            </ImageBackground>
        </View>
    );
};

// Styles for the Home screen and components
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 200,
        paddingVertical: 50,
        marginTop: -70,
    },
    button: {
        backgroundColor: '#132a4a',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        fontFamily: 'DiaClone',
        color: 'white',
        fontSize: 50,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        fontFamily: 'DiaClone',
        fontSize: 20,
    },
    overlay: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
});

export default HomeScreen;
