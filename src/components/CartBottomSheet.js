import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Keyboard, ScrollView, Image } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useSelector, useDispatch } from 'react-redux';
import { clearAllCard } from 'redux/slice/CardSlice';
import AppButton from './AppButton';
import { SuccessIcon } from 'assets/svgs';

export default function CartBottomSheet({ bottomSheetRef, onClose }) {
    const { selectedCards } = useSelector((state) => state.card);
    const [paySuccess, setPaySuccess] = useState(false);
    const snapPoints = useMemo(() => ['70%'], []);
    const dispatch = useDispatch();

    useEffect(() => {
        const hideSubscription = Keyboard.addListener('keyboardDidShow', () => {
            bottomSheetRef?.current?.close();
        });

        return () => {
            hideSubscription.remove();
        };
    }, []);

    const handleSheetChanges = useCallback((index) => {
        if (index == -1) {
            onClose && onClose(index);
        }
    }, []);

    const handleClearAll = () => dispatch(clearAllCard());

    const handlePayment = () => {
        setPaySuccess(true);
        handleClearAll();
    };

    let totalAmount = 0;

    const renderItem = (item, index) => {
        const price = item?.cardmarket?.prices?.averageSellPrice;
        const image = item?.images?.small;
        const total = item?.set?.total;
        const name = item?.name;

        totalAmount += price;

        return (
            <View style={styles.itemContainer} key={index}>
                <View>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.infoWrapper}>
                    <View>
                        <Text style={styles.pokemonName}>{name}</Text>
                        <Text>${price} per card</Text>
                    </View>
                    <View style={styles.cardLeft}>
                        <Text style={styles.remainCard}>{total - 1} </Text>
                        <Text>cards left</Text>
                    </View>
                </View>
                <View style={styles.incDecPriceWrapper}>
                    <View style={styles.price}>
                        <Text style={styles.selectedCardNo}>1</Text>
                    </View>
                    <View style={styles.price}>
                        <Text>price</Text>
                        <Text style={styles.priceValue}>${price}</Text>
                    </View>
                </View>
            </View>
        );
    };

    const SuccessComponent = () => (
        <View style={styles.paymentContainer}>
            <SuccessIcon />
            <View style={styles.paymentWrapper}>
                <Text style={styles.paymentLabel}>Payment Success</Text>
            </View>
        </View>
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
        >
            <View style={styles.container}>
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    {!paySuccess &&
                        (selectedCards.length > 0 ? (
                            <View style={styles.contentWrapper}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {selectedCards.map(renderItem)}
                                </ScrollView>
                                <View style={styles.footerContainer}>
                                    <TouchableOpacity activeOpacity={0.7} onPress={handleClearAll}>
                                        <Text style={styles.clearAll}>Clear All</Text>
                                    </TouchableOpacity>
                                    <View style={styles.cardPriceWrapper}>
                                        <Text style={styles.totalCard}>Total cards</Text>
                                        <Text style={[styles.totalCard, styles.colorRed]}>{selectedCards.length}</Text>
                                    </View>
                                    <View style={styles.cardPriceWrapper}>
                                        <Text style={styles.totalPrice}>Total price</Text>
                                        <Text style={[styles.totalPrice, styles.colorRed]}>${totalAmount}</Text>
                                    </View>
                                    <AppButton
                                        label="Pay now"
                                        style={styles.payBtn}
                                        textStyle={styles.payBtnText}
                                        onPress={handlePayment}
                                    />
                                </View>
                            </View>
                        ) : (
                            <View style={styles.noCard}>
                                <Text>There is no card selected.</Text>
                            </View>
                        ))}
                    {paySuccess && <SuccessComponent />}
                </BottomSheetScrollView>
                <View style={styles.wrapper}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onClose && onClose()} style={styles.closeBtn}>
                        <Text style={styles.closeBtnText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    wrapper: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    closeBtn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
    },
    closeBtnText: {
        color: 'white'
    },
    contentContainer: {
        backgroundColor: 'white',
        height: 390
    },
    itemContainer: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    cardLeft: {
        flexDirection: 'row'
    },
    infoWrapper: {
        justifyContent: 'space-between',
        width: '50%'
    },
    remainCard: {
        color: 'red'
    },
    pokemonName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    noCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    clearAll: {
        textDecorationLine: 'underline',
        marginTop: 10
    },
    incDecPriceWrapper: {
        justifyContent: 'space-between'
    },
    price: {
        alignItems: 'flex-end'
    },
    priceValue: {
        color: '#2886f4',
        fontWeight: 'bold',
        fontSize: 16
    },
    selectedCardNo: {
        color: '#2886f4',
        fontWeight: 'bold',
        fontSize: 20
    },
    footerContainer: {
        width: '60%',
        alignItems: 'center'
    },
    cardPriceWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10
    },
    totalCard: {
        fontWeight: 'bold',
        fontSize: 16
    },
    totalPrice: {
        fontWeight: 'bold',
        fontSize: 20
    },
    colorRed: {
        color: 'red'
    },
    payBtn: {
        backgroundColor: '#2886f4',
        marginTop: 10
    },
    payBtnText: {
        color: 'white'
    },
    paymentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paymentLabel: {
        fontSize: 20
    },
    paymentWrapper: {
        marginTop: 30
    }
});
