import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function AppTextInput({
    value,
    placeholder,
    disabled = false,
    onChangeText,
    containerStyle,
    keyboardType = 'default',
    onBlur,
    onFocus,
    style,
    ...rest
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                value={value}
                onChangeText={(_value) => onChangeText && onChangeText(_value)}
                placeholder={placeholder ? placeholder : ''}
                editable={!disabled}
                keyboardType={keyboardType}
                onBlur={onBlur}
                style={[styles.textInput, { ...style }]}
                onFocus={onFocus}
                textAlign={'center'}
                {...rest}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5
    },
    textInput: {
        borderRadius: 20,
        elevation: 5,
        borderColor: 'red',
        backgroundColor: 'white',
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }
});
