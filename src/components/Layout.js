import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

export default function Layout({ children, isBackground = true }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[styles.container, isBackground && { backgroundColor: 'white' }]}>
                <View style={styles.layoutContainer}>{children}</View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layoutContainer: {
        flex: 1,
        marginHorizontal: 20
    }
});
