import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons, images } from '../../../constants'

const NotificationScreen = () => {

    const RenderHeader = () => {
        return (
            <View>
                <Text style={{ ...FONTS.h4, color: COLORS.dark, marginBottom: SIZES.base, }}>New</Text>
                <View>
                    <FlatList
                        data={['', '']}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.container}>
                                    <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.7, width: SIZES.h1 * 1.7, }} />
                                    <View style={{ marginLeft: SIZES.base * 1.3, flex: 1 }}>
                                        <Text style={{ fontSize: SIZES.body5, fontFamily: "Mont-Light", color: COLORS.primary, }}><Text style={{ fontFamily: "Mont-Regular" }}>Laden Bloom</Text> and <Text style={{ fontFamily: "Font-Regular" }}>Emilia Harcourt</Text> also commented on <Text style={{ fontFamily: 'Mont-Regular' }}>Anna Delvey's</Text> post</Text>
                                        <Text style={{ fontSize: SIZES.body5 * 0.8, marginTop: SIZES.base, fontFamily: "Mont-Light", color: COLORS.primary }}>6 hour agp</Text>
                                    </View>
                                    <View style={{ height: SIZES.base, width: SIZES.base, borderRadius: 100, backgroundColor: COLORS.primary, }} />
                                </View>
                            )
                        }}
                    />
                </View>
                <Text style={{ ...FONTS.h4, color: COLORS.dark, marginTop: SIZES.base, marginBottom: SIZES.base }}>Earlier</Text>
            </View>
        )
    }

    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SIZES.h4 }}>
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Notifications</Text>
                <TouchableOpacity>
                    <Image source={icons.search} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                </TouchableOpacity>
            </View>

            {/* LISTS  */}
            <FlatList
                data={['', '', '', '', '', '', '', '',]}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: SIZES.width * 0.02, }}
                ListHeaderComponent={RenderHeader}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.container}>
                            <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.7, width: SIZES.h1 * 1.7, }} />
                            {index === 3 ?
                                <View style={{ flex: 1, marginLeft: SIZES.base * 1.3, }}>
                                    <Text style={{ fontSize: SIZES.body5, fontFamily: "Mont-Light", color: COLORS.primary, }}><Text style={{ fontFamily: "Mont-Regular" }}>Racheel Podrez</Text> sent you a friend requests</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: SIZES.width * 0.04 }}>
                                        <TouchableOpacity style={styles.requestCtn}>
                                            <Text style={{ ...FONTS.body5, color: COLORS.white, fontFamily: "Mont-Regular" }}>Accept</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.requestCtn, { backgroundColor: COLORS.fade }]}>
                                            <Text style={{ ...FONTS.body5, color: COLORS.primary, fontFamily: "Mont-Regular" }}>Reject</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                <View style={{ marginLeft: SIZES.base * 1.3, flex: 1 }}>
                                    <Text style={{ fontSize: SIZES.body5, fontFamily: "Mont-Light", color: COLORS.primary, }}><Text style={{ fontFamily: "Mont-Regular" }}>Laden Bloom</Text> and <Text style={{ fontFamily: "Font-Regular" }}>Emilia Harcourt</Text> also commented on <Text style={{ fontFamily: 'Mont-Regular' }}>Anna Delvey's</Text> post</Text>
                                    <Text style={{ fontSize: SIZES.body5 * 0.8, marginTop: SIZES.base, fontFamily: "Mont-Light", color: COLORS.primary }}>6 hour agp</Text>
                                </View>
                            }
                            {index === 3 && <Image source={icons.verticalmenu} style={{ height: SIZES.h4, width: SIZES.base * 0.3, marginRight: 2, }} />}
                        </View>
                    )
                }}
            />

        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        paddingTop: SIZES.h4,
    },
    container: {
        height: SIZES.h1 * 2.8,
        marginBottom: SIZES.h5,
        borderRadius: SIZES.h4,
        backgroundColor: COLORS.white,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * 0.02,
        flex: 1,
    },
    requestCtn: {
        height: SIZES.h1 * 1.05,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.base * 0.9,
        marginTop: SIZES.base * 0.7,
    },
})