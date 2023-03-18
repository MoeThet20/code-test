import { View, Text, StyleSheet, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import {
    AppTextInput,
    HeaderLogo,
    Layout,
    AppDropDown,
    CartBottomSheet,
    LoadingModal,
    Cart,
    Loading
} from 'components';
import CardItem from './component/CardItem';
import { getCardList } from 'services/cardInfo.service';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCard } from 'redux/slice/CardSlice';
import { SearchIcon } from 'assets/svgs';

const DROP_DOWN_ITEMS = [
    { label: 'Test', value: 'test' },
    { label: 'Test', value: 'test' },
    { label: 'Test', value: 'test' },
    { label: 'Test', value: 'test' }
];

export default function Dashboard() {
    const dispatch = useDispatch();
    const { selectedCards } = useSelector((state) => state.card);

    const [cardList, setCardList] = useState([]);
    const [type, setType] = useState({});
    const [rarity, setRarity] = useState({});
    const [set, setSet] = useState({});
    const [page, setPage] = useState(1);
    const [isOpenedLoadingModal, setIsOpenedLoadingModal] = useState(false);
    const [isOpenCartBottomSheet, setIsOpenCartBottomSheet] = useState(false);
    const bottomSheetRef = useRef();

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

    const handleSelect = (item) => {
        item.count = 1;
        dispatch(selectedCard([...selectedCards, ...[item]]));
    };

    const disableSelect = (id) => {
        if (selectedCards.find((item) => item.id === id)) {
            return true;
        }
        return false;
    };

    const handleOpenCart = () => {
        setIsOpenCartBottomSheet(true);
        bottomSheetRef?.current?.snapToIndex(0);
        Keyboard.dismiss();
    };

    const handleCloseCart = () => {
        setIsOpenCartBottomSheet(false);
        bottomSheetRef?.current?.close();
    };

    const selectedCardTotal = selectedCards.length;

    return (
        <View style={styles.container}>
            <HeaderLogo />
            <Layout isBackground={false}>
                <AppTextInput placeholder="Name.." style={styles.textInput} />
                <View style={styles.dropdownWrapper}>
                    <AppDropDown
                        items={DROP_DOWN_ITEMS}
                        item={type}
                        placeholder={'Type'}
                        onPressMenu={setType}
                        containerStyle={styles.dropDown}
                    />

                    <AppDropDown
                        items={DROP_DOWN_ITEMS}
                        item={rarity}
                        placeholder={'Rarity'}
                        onPressMenu={setRarity}
                        containerStyle={styles.dropDown}
                    />
                    <AppDropDown
                        items={DROP_DOWN_ITEMS}
                        item={set}
                        placeholder={'Set'}
                        onPressMenu={setSet}
                        containerStyle={styles.dropDown}
                    />
                </View>
                {cardList.length > 0 ? (
                    <View style={styles.cardsWrapper}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={cardList}
                            renderItem={({ item }) => (
                                <CardItem item={item} onPress={handleSelect} disable={disableSelect(item.id)} />
                            )}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={styles.flatContainerStyle}
                            ListFooterComponent={() => (
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => onPressLoadMore()}
                                    style={styles.flatFooterComponentStyle}
                                >
                                    <Text>
                                        <SearchIcon /> show more
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                        <Cart onPress={handleOpenCart} badge={selectedCardTotal} />
                    </View>
                ) : (
                    <Loading />
                )}
            </Layout>
            <LoadingModal isOpen={isOpenedLoadingModal} />
            {isOpenCartBottomSheet && <CartBottomSheet bottomSheetRef={bottomSheetRef} onClose={handleCloseCart} />}
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
    },
    flatContainerStyle: {
        paddingBottom: 100
    },
    flatFooterComponentStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
