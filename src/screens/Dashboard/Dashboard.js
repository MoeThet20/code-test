import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppTextInput, HeaderLogo, Layout, AppDropDown, Cart } from 'components';
import CardItem from './component/CardItem';
import { getCardList } from 'services/cardInfo.service';

export default function Dashboard() {
    const [cardList, setCardList] = useState([]);
    const [type, setType] = useState({});
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
                    <AppDropDown
                        items={[
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' }
                        ]}
                        item={type}
                        placeholder={'Type'}
                        onPressMenu={(value) => setType(value)}
                        containerStyle={{ flex: 1 }}
                    />
                    <AppDropDown
                        items={[
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' }
                        ]}
                        item={type}
                        placeholder={'Type'}
                        onPressMenu={(value) => setType(value)}
                        containerStyle={{ flex: 1 }}
                    />
                    <AppDropDown
                        items={[
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' }
                        ]}
                        item={type}
                        placeholder={'Type'}
                        onPressMenu={(value) => setType(value)}
                        containerStyle={{ flex: 1 }}
                    />
                </View>

                <View style={styles.cardsWrapper}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cardList}
                        renderItem={({ item, index }) => (
                            <CardItem item={item} isLastIndex={cardList.length - 1 === index} />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                    <Cart />
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
        flex: 1,
        position: 'relative',
        marginBottom: 50
    }
});
