import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Cart() {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.cartBtn}>
                <Text>View Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        position: 'absolute',
        bottom: 0,
        right: '38%'
    },
    cartBtn: {
        backgroundColor: '#2a8bfd',
        padding: 10,
        borderRadius: 5
    }
});
