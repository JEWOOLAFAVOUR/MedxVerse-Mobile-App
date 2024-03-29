import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, images } from '../../../../constants'
import HeaderA from '../../../../components/Header/HeaderA'

const FriendRequest = () => {
    const RenderTemplate = ({ cool }) => {
        return (
            <View style={styles.container}>
                <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.6, width: SIZES.h1 * 1.6, borderRadius: 100 }} />
                <View style={{ marginLeft: SIZES.h5, flex: 1 }}>
                    <View>
                        <Text style={{ fontSize: SIZES.body4, fontFamily: "Mont-Regular", color: COLORS.primary }}>Racheal Podrez</Text>
                        <Text style={{ fontSize: SIZES.base * 1.2, fontFamily: "Mont-Light", color: COLORS.primary }}>Ogbomosho Oyo State Nigeria</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SIZES.base * 0.5 }}>
                        <TouchableOpacity style={styles.btnCtn}>
                            <Text style={{ ...FONTS.body5, color: COLORS.white }}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnCtn, { backgroundColor: "#F1F4F5" }]}>
                            <Text style={{ ...FONTS.body5, color: COLORS.primary }}>{cool ? 'Remove' : 'Reject'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    const RenderFooter = () => {
        return (
            <View>
                {/* SUGGESTIONS */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SIZES.base * 0.5, marginBottom: SIZES.h1 }}>
                    <TouchableOpacity style={[styles.btnCtn, { width: SIZES.width * 0.435, height: SIZES.h1 * 1.6 }]}>
                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Suggestions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnCtn, { width: SIZES.width * 0.435, height: SIZES.h1 * 1.6, borderWidth: 1, backgroundColor: COLORS.white, borderColor: COLORS.primary, }]}>
                        <Text style={{ ...FONTS.body5, color: COLORS.primary }}>Your Friends</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={['',]}
                    renderItem={({ item }) => <RenderTemplate cool={true} />}
                />
            </View>
        )
    }
    return (
        <View style={styles.page}>
            <HeaderA title="Friends" />
            <View style={{ paddingHorizontal: SIZES.width * 0.05, }}>
                <Text style={{ ...FONTS.h2, color: COLORS.primary, marginBottom: SIZES.base * 1.2 }}>Friend Requests</Text>
                <FlatList
                    data={['', '']}
                    ListFooterComponent={RenderFooter}
                    renderItem={({ item }) => <RenderTemplate />}
                />
            </View>
        </View>
    )
}

export default FriendRequest

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        height: SIZES.h1 * 3.3,
        // borderWidth: 1,
        borderRadius: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.width * 0.02,
        marginBottom: SIZES.h4,
        backgroundColor: COLORS.white,
        elevation: 3,
        marginHorizontal: SIZES.base * 0.2,
        marginTop: SIZES.base * 0.3,
    },
    btnCtn: {
        height: SIZES.h1 * 1.1,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base * 0.8,
        marginTop: SIZES.base * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})