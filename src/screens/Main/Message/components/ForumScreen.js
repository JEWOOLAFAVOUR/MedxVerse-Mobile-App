import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, images, icons } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'
import { forumData } from '../../../../components/data/data'

const ForumScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.arrowleft2} style={{ height: SIZES.h1, width: SIZES.h1, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.body2, fontFamily: "Mont-Regular", color: COLORS.white, marginLeft: SIZES.h4 }}>Forums</Text>
                </View>
                {/* SEARCH CONTAINER */}
                <View style={styles.searchCtn}>
                    <Image source={icons.search} style={{ height: SIZES.h3, width: SIZES.h3, tintColor: COLORS.chocolateBackground }} />
                    <TextInput
                        placeholder='Search Forums'
                        placeholderTextColor={COLORS.chocolateBackground}
                        style={{ ...FONTS.body4, marginLeft: SIZES.base, flex: 1, marginTop: SIZES.base * 0.67 }}
                    />
                </View>
                {/* CONTENTS */}
                <View>
                    <FlatList
                        data={forumData}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.chatCtn}>
                                    <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.6, width: SIZES.h1 * 1.6, borderRadius: 100, }} />
                                    <View style={{ flex: 1, marginLeft: SIZES.base * 1.3 }}>
                                        <Text style={{ ...FONTS.body4b, color: COLORS.black, fontFamily: "Mont-Regular" }}>{item.title}</Text>
                                        <Text numberOfLines={1} style={{ ...FONTS.body5, color: COLORS.black }}>{item.message}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.black }}>{item.time}</Text>
                                        {item.numberOfMessage &&
                                            <View style={styles.numCtn}>
                                                <Text style={{ ...FONTS.h5, color: "#EA4C4C" }}>{item.numberOfMessage}</Text>
                                            </View>
                                        }
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default ForumScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h3,
    },
    searchCtn: {
        height: SIZES.h1 * 1.6,
        marginTop: SIZES.h1,
        marginBottom: SIZES.h1,
        backgroundColor: "#9FA09E",
        borderRadius: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.width * 0.03,
    },
    chatCtn: {
        height: SIZES.h1 * 2.4,
        borderRadius: SIZES.base * 1.2,
        marginBottom: SIZES.h5,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.width * 0.03,
    },
    numCtn: {
        height: SIZES.h2,
        width: SIZES.h2,
        backgroundColor: "#F9EAEC",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
})