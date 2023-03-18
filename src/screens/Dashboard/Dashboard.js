import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppTextInput, HeaderLogo, Layout, AppDropDown } from 'components';
import CardItem from './component/CardItem';
import { getCardList } from 'services/cardInfo.service';

export default function Dashboard() {
    const [cardList, setCardList] = useState([]);
    console.log('🚀 ~ file: dashboard.js:9 ~ Dashboard ~ cardList:', cardList);

    useEffect(() => {
        gettingCardList();
    }, []);

    const gettingCardList = async () => {
        const res = await getCardList();
        setCardList(res.data);
        console.log(res.data[0].cardmarket.price);
    };

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

                <View style={styles.cardsWrapper}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cardList}
                        renderItem={({ item }) => <CardItem item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
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
    },
    cardsWrapper: {
        flex: 1
    }
});
