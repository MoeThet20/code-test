import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Logo from 'assets/images/logo.png';

export default function HeaderLogo() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>TCG Marketplace</Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image source={Logo} style={styles.logo} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 40
    },
    logo: {
        width: 40,
        height: 40
    },
    imageWrapper: {
        marginBottom: -20,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }
});
