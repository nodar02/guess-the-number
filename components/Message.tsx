import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles.ts';

interface MessageProps {
    message: string;
    messageColor: string;
}

const Message: React.FC<MessageProps> = ({ message, messageColor }) => (
    <Text style={[styles.message, { color: messageColor }]}>{message}</Text>
);

export default Message;
