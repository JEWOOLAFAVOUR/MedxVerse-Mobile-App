import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons } from '../../../constants'

const NotificationScreen = () => {

    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Notification</Text>
                <Image source={icons.search} style={{ height: SIZES.h2, width: SIZES.h2 }} />
            </View>

        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.fade,
        paddingHorizontal: SIZES.width * 0.04,
        paddingTop: SIZES.h4,

    },
})