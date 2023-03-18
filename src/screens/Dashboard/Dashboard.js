import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { AppTextInput, HeaderLogo, Layout, AppDropDown, Cart, LoadingModal } from 'components';
import CardItem from './component/CardItem';
import { getCardList } from 'services/cardInfo.service';
import { CART } from 'constants/routes';

export default function Dashboard({ navigation }) {
    const [cardList, setCardList] = useState([]);
    console.log('🚀 ~ file: dashboard.js:10 ~ Dashboard ~ cardList:', cardList.length);
    const [type, setType] = useState({});
    const [page, setPage] = useState(1);
    const [isOpenedLoadingModal, setIsOpenedLoadingModal] = useState(false);
    const flatListRef = useRef(null);

    useEffect(() => {
        gettingCardList();
    }, []);

    const gettingCardList = async () => {
        const res = await getCardList();
        setCardList(res.data);
    };

    const onPressLoadMore = async () => {
        setIsOpenedLoadingModal(true);
        let _page = page + 1;
        const res = await getCardList(_page);
        setCardList([...cardList, ...res.data]);
        setPage(page + 1);
        setIsOpenedLoadingModal(false);
    };

    const handleGoToCart = () => navigation.navigate(CART);

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
                        containerStyle={styles.dropDown}
                    />
                    <AppDropDown
                        items={[
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' }
                        ]}
                        item={type}
                        placeholder={'Rarity'}
                        onPressMenu={(value) => setType(value)}
                        containerStyle={styles.dropDown}
                    />
                    <AppDropDown
                        items={[
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' },
                            { label: 'Test', value: 'test' }
                        ]}
                        item={type}
                        placeholder={'Set'}
                        onPressMenu={(value) => setType(value)}
                        containerStyle={styles.dropDown}
                    />
                </View>

                <View style={styles.cardsWrapper}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cardList}
                        renderItem={({ item }) => <CardItem item={item} />}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        ListFooterComponent={() => (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => onPressLoadMore()}
                                style={{ alignItems: 'center' }}
                            >
                                <Text>show more</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <Cart onPress={handleGoToCart} />
                </View>
            </Layout>
            <LoadingModal isOpen={isOpenedLoadingModal} />
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
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    cardsWrapper: {
        flex: 1,
        position: 'relative',
        marginBottom: 50
    },
    dropDown: {
        width: '30%'
    }
});
