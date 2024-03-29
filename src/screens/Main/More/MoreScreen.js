import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../constants'

const MoreScreen = () => {
    return (
        <View style={styles.page}>
            <View>
                <Image source={images.avatar1} style={{ height: SIZES.h1 * 2, width: SIZES.h1 * 2, }} />
            </View>
        </View>
    )
}

export default MoreScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});