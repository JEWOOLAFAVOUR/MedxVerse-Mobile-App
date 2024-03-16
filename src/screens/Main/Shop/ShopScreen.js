import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, FONTS, images } from '../../../constants'

const ShopScreen = () => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: SIZES.width * 0.03 }}>
                <Text style={{ ...FONTS.body2, color: COLORS.black }}>Ikeja</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.closeCtn}>
                    <Text style={{ ...FONTS.body5, color: COLORS.white }}>Find closest restaurant to you</Text>
                </TouchableOpacity>
                <Image source={icons.inbox} style={{ height: SIZES.h3, width: SIZES.h3 }} />
            </View>
            {/* SEARCH CTN  */}
            <View style={{ marginHorizontal: SIZES.width * 0.03, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={[styles.searchCtn, {}]}>
                    <Image source={icons.search} style={{ height: SIZES.h3, width: SIZES.h3, tintColor: COLORS.white, marginRight: SIZES.h4 }} />
                    <TextInput placeholder="Explore on Suru" placeholderTextColor={COLORS.chocolateBackground} style={{ ...FONTS.body4, color: COLORS.chocolateBackground }} />
                </View>
                <View style={[styles.searchCtn, { width: SIZES.width * 0.13, }]}>
                    <Image source={icons.shop} style={{ height: SIZES.h2, width: SIZES.h2, tintColor: COLORS.white }} />
                </View>
            </View>
        </View>
    )
}

export default ShopScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.base,
    },
    closeCtn: {
        paddingHorizontal: SIZES.h3,
        paddingVertical: 1,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base * 0.5,
    },
    searchCtn: {
        marginTop: SIZES.h5,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        // flex: 1,
        height: SIZES.h1 * 1.4,
        width: SIZES.width * 0.78,
        paddingHorizontal: SIZES.h5,
        borderRadius: SIZES.base,
    },
});