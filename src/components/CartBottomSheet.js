import React, { useMemo, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function CartBottomSheet({ bottomSheetRef, onClose }) {
    const snapPoints = useMemo(() => ['70%'], []);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            bottomSheetRef?.current.snapToIndex(1);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            bottomSheetRef?.current.snapToIndex(0);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const handleSheetChanges = useCallback((index) => {
        if (index == -1) {
            if (onClose) onClose(index);
        }
    }, []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
        >
            <View style={styles.container}>
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
    }
});
