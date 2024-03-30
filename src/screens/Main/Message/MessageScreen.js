import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons, images } from '../../../constants'
import { messageData } from '../../../components/data/data'
import { useNavigation } from '@react-navigation/native'

const MessageScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            <View style={{ paddingHorizontal: SIZES.width * 0.05, paddingTop: SIZES.h5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white, fontStyle: 'italic' }}>Message</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("ForumScreen")}>
                        <Image source={icons.hash} style={{ height: SIZES.h1, width: SIZES.h1 }} />
                    </TouchableOpacity>
                </View>
                {/* SEARCH CONTAINER */}
                <View style={styles.searchCtn}>
                    <Image source={icons.search} style={{ height: SIZES.h3, width: SIZES.h3, tintColor: COLORS.chocolateBackground }} />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={COLORS.chocolateBackground}
                        style={{ ...FONTS.body4, marginLeft: SIZES.base, flex: 1, marginTop: SIZES.base * 0.67 }}
                    />
                </View>
            </View>
            {/* FLEETS */}
            <View style={{ marginLeft: SIZES.width * 0.04 }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white, marginBottom: SIZES.h4 }}>Fleets</Text>
                <FlatList
                    data={['', '', '', '', '', '', '', '']}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ marginRight: SIZES.h5 * 1.2, }}>
                                <View style={styles.fleetCtn}>
                                    <Image source={images.avatar1} style={{ height: SIZES.h1 * 2.2, width: SIZES.h1 * 2.2, borderRadius: 100 }} />
                                </View>
                                <Text style={{ ...FONTS.body5, color: COLORS.white, textAlign: 'center' }}>Marvin</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            {/* MESSAGES */}
            <View style={styles.messageCtn}>
                <FlatList
                    data={messageData}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')} style={styles.chatCtn}>
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
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.primary,
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
    fleetCtn: {
        height: SIZES.h1 * 2.3,
        width: SIZES.h1 * 2.3,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.green,
    },
    messageCtn: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: SIZES.h2,
        borderTopRightRadius: SIZES.h1,
        borderTopLeftRadius: SIZES.h1,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h1,
    },
    chatCtn: {
        height: SIZES.h1 * 2.4,
        borderWidth: 1,
        borderRadius: SIZES.base * 1.2,
        marginBottom: SIZES.h5,
        borderColor: COLORS.chocolateBackground,
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