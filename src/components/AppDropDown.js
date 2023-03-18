import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

import { DownArrowIcon } from 'assets/svgs';

export default function AppDropDown({
    label,
    placeholder,
    item,
    items,
    onPressMenu,
    disabled = false,
    containerStyle,
    style
}) {
    const [visible, setVisible] = useState(false);
    const tempItem = item;

    const hideMenu = (item) => {
        setVisible(false);
        onPressMenu && onPressMenu(item || tempItem);
    };

    const showMenu = () => setVisible(true);

    return (
        <View style={{ ...containerStyle }}>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <Menu
                visible={visible}
                onRequestClose={hideMenu}
                anchor={
                    <TouchableOpacity
                        onPress={showMenu}
                        disabled={disabled}
                        style={[
                            styles.btn,
                            {
                                backgroundColor: disabled ? 'rgba(0,0,0,0.2)' : 'white',
                                ...style
                            }
                        ]}
                    >
                        <Text
                            style={[
                                styles.placeholder,
                                {
                                    color: item?.value ? 'black' : 'rgba(0,0,0,0.3)'
                                }
                            ]}
                        >
                            {item?.value ? item?.label : placeholder ? placeholder : 'Select'}
                        </Text>
                        <DownArrowIcon width={13} height={13} fill={'rgba(0,0,0,0.4)'} />
                    </TouchableOpacity>
                }
            >
                {items &&
                    items.length > 0 &&
                    items.map((item, index) => {
                        return (
                            <View key={index} style={{ width: '100%' }}>
                                <MenuItem onPress={() => hideMenu(item)} style={{}}>
                                    {item.label}
                                </MenuItem>
                                <MenuDivider />
                            </View>
                        );
                    })}
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {},
    btn: {
        height: 40,
        borderRadius: 100,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    placeholder: {
        textAlign: 'center',
        marginRight: 5
    }
});
