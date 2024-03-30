import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: SIZES.base, }}>
            <View style={styles.topCtn}>
                <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.5, width: SIZES.h1 * 1.5 }} />
                <Image source={images.logo2} style={{ height: SIZES.h1 * 1.4, width: SIZES.h1 * 1.4 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")} style={{ marginRight: SIZES.h1 }}>
                        <Image source={icons.search} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("FriendRequest")}>
                        <Image source={icons.person} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: COLORS.fade, marginTop: SIZES.h3, marginBottom: SIZES.h5 }} />
            {/* SEARCH */}
            <View style={{ paddingHorizontal: SIZES.width * 0.05, }}>
                <View style={styles.searchCtn}>
                    <Text style={{ ...FONTS.body5, color: COLORS.black2 }}>What is on your mind, Hashem?</Text>
                </View>
                {/* CONTENT */}
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    topCtn: {
        paddingHorizontal: SIZES.width * 0.05,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    searchCtn: {
        height: SIZES.h1 * 1.5,
        backgroundColor: "#f6f6f6",
        borderRadius: SIZES.base,
        paddingHorizontal: SIZES.width * 0.03,
        elevation: 1,
        justifyContent: 'center',
    },
})