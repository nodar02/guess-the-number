import React from 'react';
import { View } from 'react-native';
import Game from './components/Game';

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <Game />
        </View>
    );
}
