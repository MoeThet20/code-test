import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { CartIcon } from 'assets/svgs';

export default function Cart({ onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonBadgeWrapper}>
                <TouchableOpacity activeOpacity={0.7} style={styles.cartBtn} onPress={() => onPress && onPress()}>
                    <Text style={styles.cartText}>
                        <CartIcon fill="white" /> View Cart
                    </Text>
                </TouchableOpacity>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        position: 'absolute',
        bottom: 0,
        right: '35%'
    },
    cartBtn: {
        alignItems: 'center',
        backgroundColor: '#2a8bfd',
        padding: 10,
        borderRadius: 5
    },
    cartText: {
        color: 'white'
    },
    buttonBadgeWrapper: {
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        top: -10,
        left: -10,
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 200
    },
    badgeText: {
        color: 'white',
        textAlign: 'center'
    }
});
