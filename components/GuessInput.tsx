import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

interface GuessInputProps {
    guess: string;
    setGuess: (text: string) => void;
    handleGuess: () => void;
    attempts: number;
    maxAttempts: number;
}

const GuessInput: React.FC<GuessInputProps> = ({ guess, setGuess, handleGuess, attempts, maxAttempts }) => (
    <View style={{justifyContent: 'center', alignItems: "center"}}>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={guess}
            onChangeText={(text) => setGuess(text)}
            placeholder="Enter your guess"
            placeholderTextColor="#888"
            editable={attempts <= maxAttempts}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={handleGuess}
            disabled={attempts > maxAttempts}
        >
            <Text style={styles.buttonText}>Guess</Text>
        </TouchableOpacity>
    </View>
);

export default GuessInput;
