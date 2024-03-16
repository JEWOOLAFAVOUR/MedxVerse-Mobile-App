import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, FONTS } from '../../../constants'

const ExploreScreen = () => {
    const exploreData = [
        { id: 1, title: "Current Location", detail: "No 2, Clement way Ikeja", iconName: icons.location, onPress: () => { } },
        { id: 2, title: "Look up the map", iconName: icons.lookup, onPress: () => { } },
    ];
    return (
        <View style={styles.page}>
            <TouchableOpacity style={styles.topCtn}>
                <Image source={icons.arrowleft} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                <Text style={{ ...FONTS.body3a, color: COLORS.black, marginLeft: SIZES.base }}>Explore Location</Text>
            </TouchableOpacity>
            <View>
                {
                    exploreData.map((data, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.container}>
                                <Image source={data.iconName} style={{ height: SIZES.h1 * 1.4, width: SIZES.h1 * 1.2 }} />
                                <View style={{ marginLeft: SIZES.h3 }}>
                                    <Text style={{ ...FONTS.body3, color: COLORS.black, fontFamily: "Urbanist-Medium" }}>{data.title}</Text>
                                    {data.id === 1 &&
                                        <Text style={{ ...FONTS.body5, color: COLORS.black }}>{data.detail}</Text>
                                    }
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h4,
        paddingHorizontal: SIZES.width * 0.04,
    },
    topCtn: {
        height: SIZES.h1 * 1.7,
        backgroundColor: "#F4F4F4",
        borderRadius: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.h5,
        marginBottom: SIZES.h1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.h2,
        paddingHorizontal: SIZES.base,
    },
})