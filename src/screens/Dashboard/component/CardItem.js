import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { AppButton } from 'components';
import Logo from 'assets/images/logo.png';

export default function CardItem() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={Logo} style={styles.image} />
                <Text style={styles.titleText}>POKEMON</Text>
                <Text style={styles.rarityText}>rarity</Text>
                <View style={styles.priceAndItemWrapper}>
                    <Text style={styles.priceAndItemText}>$2.49</Text>
                    <Text style={styles.priceAndItemText}>3 left</Text>
                </View>
                <AppButton label="Select Card" style={styles.cardButton} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 220
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        backgroundColor: 'white',
        height: 200,
        borderRadius: 20
    },
    priceAndItemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 10
    },
    cardButton: {
        marginTop: 20,
        marginBottom: -85,
        width: '80%'
    },
    rarityText: {
        color: '#0e6db0'
    },
    priceAndItemText: {
        fontSize: 18,
        color: 'gray'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: '70%',
        height: 240,
        position: 'absolute',
        top: -190
    }
});
