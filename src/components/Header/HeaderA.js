import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons, SIZES, FONTS, COLORS, } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const HeaderA = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={icons.arrowleft2} style={{ height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9, }} />
            </TouchableOpacity>
            <Text style={{ ...FONTS.body3, color: COLORS.primary, fontFamily: 'Mont-Regular', marginLeft: SIZES.h5, marginTop: SIZES.base * 0.6 }}>{title}</Text>
        </View>
    )
}

export default HeaderA

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.width * 0.05,
        marginTop: SIZES.h5,
        marginBottom: SIZES.base,
    },
})