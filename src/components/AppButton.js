import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function AppButton({ label, onPress, style, textStyle, disable }) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, style]}
            onPress={() => onPress && onPress()}
            disabled={disable}
        >
            <Text style={[styles.text, { ...textStyle }, disable && { color: 'white' }]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5fc94d',
        width: '100%',
        alignItems: 'center',
        padding: 13,
        borderRadius: 20
    },
    text: {
        fontSize: 16
    }
});
