import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

export default function LoadingModal({ isOpen, onClose }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isOpen} onRequestClose={() => onClose && onClose()}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color={'red'} />
            </View>
        </Modal>
    );
}
