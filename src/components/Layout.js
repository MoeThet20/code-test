import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

export default function Layout({ children }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.layoutContainer}>{children}</View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    layoutContainer: {
        flex: 1,
        marginHorizontal: 20
    }
});
