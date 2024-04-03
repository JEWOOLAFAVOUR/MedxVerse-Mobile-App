import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, icons, FONTS, COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const AuthHeader = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={icons.arrowleft} style={{ height: SIZES.h3, width: SIZES.h3, tintColor: COLORS.primary }} />
            </TouchableOpacity>
            <View>
                <Text style={{ ...FONTS.h1a, fontFamily: "Urbanist-Medium", color: COLORS.primary, marginTop: SIZES.h1, }}>{title}</Text>
            </View>
            <View />
        </View>
    )
}

export default AuthHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})