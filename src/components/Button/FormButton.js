import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES } from '../../constants';

const FormButton = ({ title, onPress, btnStyle, textCtn }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, btnStyle]}>
            <Text style={[styles.text, textCtn]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    container: {
        height: SIZES.h1 * 1.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
        marginBottom: SIZES.h4,
    },
    text: {
        ...FONTS.body4,
        color: COLORS.white,
        fontFamily: "Mont-Regular",
    },
})