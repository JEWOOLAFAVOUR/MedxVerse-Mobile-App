import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images, FONTS, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const MoreScreen = () => {
    const navigation = useNavigation();
    const accountData = [
        { id: 1, title: "My Profile", iconName: icons.person, onPress: () => navigation.navigate('') },
    ]

    const securityData = [
        { id: 1, title: "Change Passsword", iconName: icons.person, onPress: () => navigation.navigate('') },
        { id: 2, title: "Reset Password", iconName: icons.person, onPress: () => navigation.navigate('') },
    ]

    const helpData = [
        { id: 1, title: "Customer Servixe", iconName: icons.person, onPress: () => navigation.navigate('') },
        { id: 2, title: "Chat with us", iconName: icons.person, onPress: () => navigation.navigate('') },
    ]

    const otherData = [
        { id: 1, title: "Delete Account", iconName: icons.person, onPress: () => navigation.navigate('') },
        { id: 2, title: "Log out", iconName: icons.person, onPress: () => navigation.navigate('') },
    ]

    const RenderTemplate = ({ title, data }) => {
        return (
            <View style={{ marginBottom: SIZES.h4 * 0.8 }}>
                {title &&
                    <Text style={{ ...FONTS.body4, color: COLORS.primary, fontFamily: "Mont-Regular", marginBottom: SIZES.base * 0.5 }}>{title}</Text>
                }
                <View style={styles.minCtn}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.h5 }}>
                                    <View style={styles.iconCircle}>
                                        <Image source={icons.person} style={{ height: SIZES.h4, width: SIZES.h4 }} />
                                    </View>
                                    <Text style={{ marginLeft: SIZES.h5, ...FONTS.body4, color: COLORS.primary, fontFamily: "Mont-Regular" }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.h3 }}>
                <Image source={images.avatar2} style={{ height: SIZES.h1 * 2.5, width: SIZES.h1 * 2.5, }} />
                <View style={{ marginLeft: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary, fontFamily: "Mont-Regulars" }}>Hello!</Text>
                    <Text style={{ ...FONTS.body5, color: COLORS.primary, }}>Good Afternoon</Text>
                </View>
            </View>

            {/* OTHER DETAILS */}
            <View>
                <RenderTemplate title="Account" data={accountData} />
                <RenderTemplate title="Security" data={securityData} />
                <RenderTemplate title="Help" data={helpData} />
                <RenderTemplate data={otherData} />

            </View>

        </View>
    )
}

export default MoreScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        paddingTop: SIZES.h3
    },
    iconCircle: {
        height: SIZES.h1 * 1.2,
        width: SIZES.h1 * 1.2,
        borderRadius: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    minCtn: {
        paddingVertical: SIZES.h4,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: SIZES.base,
        paddingHorizontal: SIZES.h3 * 0.8
    },
});