import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AppTextInput, HeaderLogo, Layout, AppDropDown } from 'components';
import CardItem from './component/CardItem';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <HeaderLogo />
            <Layout isBackground={false}>
                <AppTextInput placeholder="Name.." style={styles.textInput} />
                <View style={styles.dropdownWrapper}>
                    <AppDropDown />
                    <AppDropDown />
                    <AppDropDown />
                </View>
                <CardItem />
                <CardItem />
                <CardItem />
            </Layout>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        padding: 5
    },
    dropdownWrapper: {
        flexDirection: 'row',
        marginVertical: 10
    }
});
