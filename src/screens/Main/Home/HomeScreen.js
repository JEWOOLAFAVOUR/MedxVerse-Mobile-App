import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const pics = ['', '', '',]
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.offwhite, paddingTop: SIZES.base, }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
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
            <View style={{ paddingHorizontal: SIZES.width * 0.03, }}>
                <View style={styles.searchCtn}>
                    <Text style={{ ...FONTS.body5, color: COLORS.black2 }}>What is on your mind, Hashem?</Text>
                </View>


                {/* CONTENT */}
                <FlatList
                    data={['', '', '']}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                {/* HEADER */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.base }}>
                                    <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.5, width: SIZES.h1 * 1.5 }} />
                                    <View style={{ flex: 1, marginLeft: SIZES.h4 }}>
                                        <Text style={{ ...FONTS.body4, color: COLORS.primary, fontFamily: "Mont-Regular" }}>Anna Mary</Text>
                                        <View>
                                            <Text style={{ fontSize: SIZES.body5 * 0.9, fontFamily: "Mont-Light", color: COLORS.black }}>2 Hours ago</Text>
                                        </View>
                                    </View>
                                    <Image source={icons.round} style={{ height: SIZES.h1, width: SIZES.h1 }} />
                                </View>
                                {/* CONTENTS */}
                                <Text style={{ fontFamily: "Mont-Regular", color: COLORS.primary, fontSize: SIZES.h4 * 0.9, lineHeight: 18 }}>Hey pals, guess what? 🎉 I've just wrapped up crafting these mind-blowing 3D wallpapers, drenched in the coolest of the cool colors! 🌈💎</Text>
                                {/* IMAGES */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SIZES.h4 }}>
                                    {
                                        pics.map((data, index) => {
                                            return (
                                                <View key={index}>
                                                    <Image source={images.pic1} style={{ height: SIZES.height * 0.29, width: SIZES.width * 0.27, borderRadius: SIZES.h5 }} />
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                {/* LIKES */}
                                <Text style={{ ...FONTS.body5, color: COLORS.primary, marginBottom: SIZES.base * 0.8 }}>3.4k Comments 46 Shares</Text>
                                {/* REACTIONS */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <TouchableOpacity style={styles.reactionCtn}>
                                            <Image source={icons.thumb2} style={{ height: SIZES.h4 * 1.2, width: SIZES.h4 * 1.2 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.reactionCtn}>
                                            <Image source={icons.comment} style={{ height: SIZES.h4 * 1.2, width: SIZES.h4 * 1.2 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.reactionCtn}>
                                            <Image source={icons.share} style={{ height: SIZES.h4 * 1.2, width: SIZES.h4 * 1.2 }} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* OTHER REACTIONS */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Text style={{ fontSize: SIZES.base * 1.1, fontFamily: "Mont-Light", color: COLORS.primary, marginRight: SIZES.base * 0.9 }}>Q&A with Mark & 361k others</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={icons.love} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                                            <Image source={icons.thumb} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                                            <Image source={icons.care} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                                        </View>
                                    </View>
                                </View>
                                {/* ONE COMMENTS */}
                                <View style={{ height: 2, backgroundColor: "#F1F4F5", marginVertical: SIZES.h4 }} />
                                {/* COMMENTS */}
                                <View style={{ flexDirection: 'row', }}>
                                    <Image source={images.avatar1} style={{ height: SIZES.h1 * 1.3, width: SIZES.h1 * 1.3, borderRadius: 100 }} />
                                    <View style={{ marginLeft: SIZES.h5 }}>
                                        <Text style={{ ...FONTS.h4, color: COLORS.primary, }}>Mark Ramos</Text>
                                        <Text style={{ fontSize: SIZES.body4 * 0.9, fontFamily: "Mont-Light", color: COLORS.primary, }}>Greate work! Well done girl.</Text>
                                        <View style={{ marginTop: SIZES.h5, flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={{ marginRight: SIZES.h4 }}>
                                                <Text style={{ ...FONTS.body4b, color: COLORS.primary, fontFamily: "Mont-Regular" }}>Like</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginRight: SIZES.h4 }}>
                                                <Text style={{ ...FONTS.body4b, color: COLORS.primary, fontFamily: "Mont-Regular" }}>Reply</Text>
                                            </TouchableOpacity>
                                            <Text style={{ ...FONTS.body4b, color: COLORS.primary, fontFamily: "Mont-Regular" }}>2m</Text>
                                        </View>
                                    </View>
                                    {/* <Image source={icons.verticalmenu2} style={{ height: SIZES.h4, width: SIZES.h4 }} /> */}
                                </View>
                            </View>
                        )
                    }}
                />


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
        marginBottom: SIZES.h3,
    },
    container: {
        paddingHorizontal: SIZES.width * 0.03,
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.h3,
        borderRadius: SIZES.h3,
        marginBottom: SIZES.h4,
    },
    reactionCtn: {
        height: SIZES.h1 * 1.4,
        width: SIZES.h1 * 1.4,
        borderRadius: 100,
        backgroundColor: COLORS.fade,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SIZES.base,
    },
})