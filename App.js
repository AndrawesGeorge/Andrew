// src/App.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { signUp, signIn, signOut } from './auth'; // Adjust the import path as necessary

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignUp = () => {
        signUp(username, password, email);
    };

    const handleSignIn = () => {
        signIn(username, password);
    };

    const handleSignOut = () => {
        signOut();
    };

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                placeholder="Email (for Sign Up)"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
            <Button title="Sign In" onPress={handleSignIn} />
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

export default App;
