import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
    const [targetNumber, setTargetNumber] = useState<number>(generateRandomNumber());
    const [guess, setGuess] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messageColor, setMessageColor] = useState<string>('#f5f5f5');
    const [attempts, setAttempts] = useState<number>(0);
    const [guessedNumbers, setGuessedNumbers] = useState<number[]>([]);
    const maxAttempts = 10; 

    function generateRandomNumber(): number {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handleGuess() {
        const guessedNumber = parseInt(guess, 10);

        if (guessedNumber < 1 || guessedNumber > 100)
        {
            setMessage(`The number must be between 1 and 100!!`);
            setMessageColor('#ff6347');
            return;
        }

        if (attempts >= maxAttempts) {
            setMessage(`Game over! You've used all ${maxAttempts} attempts.`);
            setMessageColor('#ff6347');
            return;
        }

        if (isNaN(guessedNumber)) {
            setMessage("Please enter a valid number.");
            setMessageColor('#ff6347');
            return;
        }

        if (guessedNumbers.includes(guessedNumber)) {
            setMessage(`You've already guessed ${guessedNumber}. Try a different number!`);
            setMessageColor('#ff6347');
            return;
        }

        setGuessedNumbers([...guessedNumbers, guessedNumber]);
        setAttempts(attempts + 1);

        if (guessedNumber === targetNumber) {
            setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts.`);
            setMessageColor('#4aff44');
        } else if (guessedNumber < targetNumber) {
            setMessage("Too low! Try again.");
            setMessageColor('#ffb837');
        } else {
            setMessage("Too high! Try again.");
            setMessageColor('#ffb837');
        }

        setGuess('');
    }

    function handleReset() {
        setTargetNumber(generateRandomNumber());
        setGuess('');
        setMessage('');
        setMessageColor('#f5f5f5');
        setAttempts(0);
        setGuessedNumbers([]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Guess the Number Game</Text>
            <Text style={styles.instructions}>Guess the number between 1 and 100.</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={guess}
                onChangeText={(text) => setGuess(text)}
                placeholder="Enter your guess"
                placeholderTextColor="#888"
                editable={attempts <= maxAttempts} // Disable input after max attempts
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleGuess}
                disabled={attempts > maxAttempts} // Disable button after max attempts
            >
                <Text style={styles.buttonText}>Guess</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <Text style={[styles.message, { color: messageColor }]}>{message}</Text> {/* Apply messageColor here */}
            <Text style={styles.attempts}>Attempts: {attempts}</Text>
            <Text style={styles.footer}>Created by Nodar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f5f5f5',
        marginBottom: 20,
    },
    instructions: {
        fontSize: 16,
        color: '#ddd',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '50%',
        padding: 10,
        fontSize: 16,
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#555',
        color: '#f5f5f5',
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        padding: 10,
        width: 120,
        margin: 5,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#6423ff',
    },
    buttonText: {
        color: '#f5f5f5',
        fontSize: 16,
    },
    resetButton: {
        backgroundColor: '#c23333',
    },
    message: {
        fontSize: 18,
        color: '#f5f5f5',
        marginVertical: 10,
        textAlign: 'center',
    },
    attempts: {
        fontSize: 14,
        color: '#888',
        marginTop: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        fontSize: 14,
        color: '#aaa',
        textAlign: 'center',
    },
});
