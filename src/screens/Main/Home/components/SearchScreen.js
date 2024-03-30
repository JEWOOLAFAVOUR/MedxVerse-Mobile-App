import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../../constants'
import HeaderA from '../../../../components/Header/HeaderA'
import { searchHistoryData, suggestionSearchData } from '../../../../components/data/data'

const SearchScreen = () => {
    const RenderFooter = () => {
        return (
            <View style={{ marginTop: SIZES.h5 }}>
                <Text style={{ ...FONTS.body4, color: COLORS.primary, marginBottom: SIZES.h2 * 1.2, marginTop: SIZES.base }}>Search History</Text>
                <FlatList
                    data={searchHistoryData}
                    renderItem={({ item }) => <RenderTemplate item={item} />}
                />
            </View>
        )
    }
    const RenderTemplate = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.7, width: SIZES.h1 * 1.7, }} />
                <View style={{ marginLeft: SIZES.h4, flex: 1 }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary, fontFamily: 'Mont-Regular' }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary }}>{item.detail}</Text>
                </View>
                {
                    item?.id === 3 &&
                    <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.7, width: SIZES.h1 * 1.7, }} />

                }
            </View>
        )
    }
    return (
        <View style={styles.page}>
            <HeaderA title="Search" />
            <View style={{ paddingHorizontal: SIZES.width * 0.04, marginTop: SIZES.h4, }}>
                {/* SEARCH CONTAINER */}
                <View style={styles.searchCtn}>
                    <TextInput
                        placeholder='Search anything'
                        placeholderTextColor={COLORS.primary}
                        style={{ ...FONTS.body4b, color: COLORS.primary, flex: 1, }}

                    />
                    <Image source={icons.setting} style={{ height: SIZES.h2, width: SIZES.h2, marginLeft: SIZES.base * 0.5 }} />
                </View>
                {/* SUGGESTIONS */}
                <View style={{ marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary, marginBottom: SIZES.h2, marginTop: SIZES.base }}>Suggestion</Text>
                    <FlatList
                        data={suggestionSearchData}
                        ListFooterComponent={RenderFooter}
                        renderItem={({ item }) => <RenderTemplate item={item} />}
                    />
                </View>
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    searchCtn: {
        height: SIZES.h1 * 1.7,
        backgroundColor: COLORS.fade2,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.base * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.h3 * 1.2,
    },
});