import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GuessInput from './GuessInput';
import Message from './Message';
import { styles } from '../styles/styles';

export default function Game() {
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

        if (guessedNumber < 1 || guessedNumber > 100) {
            setMessage("The number must be between 1 and 100!");
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
            <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess} attempts={attempts} maxAttempts={maxAttempts} />
            <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <Message message={message} messageColor={messageColor} />
            <Text style={styles.attempts}>Attempts: {attempts}</Text>
            <Text style={styles.footer}>Created by Nodar</Text>
        </View>
    );
}
