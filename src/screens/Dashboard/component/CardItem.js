import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { AppButton } from 'components';

export default function CardItem({ item, onPress, disable }) {
    const price = item?.cardmarket?.prices?.averageSellPrice;
    const image = item?.images?.small;
    const total = item?.set?.total;
    const name = item?.name;
    return (
        <View style={[styles.container]} onStartShouldSetResponder={() => true}>
            <View style={styles.wrapper}>
                <Image source={{ uri: image }} style={styles.image} />

                <Text style={styles.titleText}>{name}</Text>
                <Text style={styles.rarityText}>rarity</Text>
                <View style={styles.priceAndItemWrapper}>
                    <Text style={[styles.priceAndItemText, { marginRight: 15 }]}>${price}</Text>
                    <Text style={styles.priceAndItemText}>{total} left</Text>
                </View>
                <AppButton
                    label="Select Card"
                    style={[styles.cardButton, disable && { backgroundColor: 'black' }]}
                    textStyle={styles.selectBtnText}
                    onPress={() => onPress && onPress(item)}
                    disable={disable}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 230,
        marginBottom: 40
    },
    wrapper: {
        position: 'relative',
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
        height: 250,
        position: 'absolute',
        top: -200,
        borderRadius: 20,
        resizeMode: 'contain',
        overflow: 'hidden'
    },
    selectBtnText: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
