import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation = useNavigation();

    const pics = ['', '', '',]


    return (
        <ScrollView style={styles.page}>
            <View>
                <Image source={images.background} style={{ height: SIZES.height * 0.25, width: SIZES.width, }} />
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: SIZES.h2, left: SIZES.h3, }}>
                    <Image source={icons.arrowleft2} style={{ height: SIZES.h1, width: SIZES.h1 }} />
                    <Text style={{ ...FONTS.h3, color: COLORS.black, marginLeft: SIZES.h4, fontFamily: "Mont-Medium" }}>User</Text>
                </TouchableOpacity>
                <View style={{ position: 'absolute', alignSelf: 'center', top: SIZES.height * 0.15, }}>
                    <Image source={images.avatar3} style={{ height: SIZES.h1 * 4.4, width: SIZES.h1 * 4.4, borderRadius: 100, }} />
                </View>
            </View>
            {/* BOTTOM */}
            <View style={{ paddingHorizontal: SIZES.width * 0.04, }}>
                <View style={{ marginTop: SIZES.h1 * 2.4, }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.primary, textAlign: 'center' }}>Erica Sinclair</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.black, textAlign: 'center' }}>Photographer | Videographer</Text>
                </View>
                {/* Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SIZES.h4 }}>
                    <TouchableOpacity style={styles.messageCtn}>
                        <Text style={{ ...FONTS.body4, color: COLORS.white, }}>Messenger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.messageCtn, { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.primary }]}>
                        <Text style={{ ...FONTS.body4, color: COLORS.primary, }}>Friends</Text>
                    </TouchableOpacity>
                </View>
                {/* ABOUTS */}
                <View style={{ marginTop: SIZES.h4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.h4 }}>
                        <Image source={icons.about} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body4b, color: COLORS.black }}>Photographer & Videographer</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.h4 }}>
                        <Image source={icons.about} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body4b, color: COLORS.black }}>Lives in <Text style={{ ...FONTS.h4, color: COLORS.primary }}>NewYork, USA</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.h4 }}>
                        <Image source={icons.about} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body4b, color: COLORS.black }}>Behance/rachelpodrez</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.h4 }}>
                        <Image source={icons.about} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body4b, color: COLORS.black }}>More info about <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Rachel</Text></Text>
                    </View>
                </View>
                {/* PHOTOS  */}
                <View>
                    <Text style={{ ...FONTS.h3, color: COLORS.primary }}>Friends  <Text style={{ ...FONTS.body4, color: COLORS.black }}>(3,024 mutual)</Text></Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SIZES.base }}>
                        <Image source={images.friend} style={{ height: SIZES.h1 * 2.2, width: SIZES.width * 0.62, }} />
                        <Text style={{ ...FONTS.body4, color: COLORS.primary, fontFamily: "Mont-Medium" }}>See all</Text>
                    </View>
                </View>

                {/* PIN POST */}
                <View style={{ marginTop: SIZES.h2 }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.primary, marginBottom: SIZES.h4 }}>Pinned Post</Text>
                    {/* CONTENT */}
                    <View>
                        <FlatList
                            data={['', '', '']}
                            contentContainerStyle={{ paddingBottom: SIZES.h1 }}
                            showsVerticalScrollIndicator={false}
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



            </View>



        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    messageCtn: {
        height: SIZES.h1 * 1.7,
        width: SIZES.width * 0.43,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
    },
    container: {
        paddingHorizontal: SIZES.width * 0.03,
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.h3,
        borderRadius: SIZES.h3,
        marginBottom: SIZES.h3,
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
});