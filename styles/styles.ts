import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        width: 600,
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
        padding: 7,
        width: 100,
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
