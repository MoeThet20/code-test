import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function LoadingModal({ isOpen, onClose }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={'red'} />
        </View>
    );
}
