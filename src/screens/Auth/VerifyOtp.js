import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import ConfirmationCodeField from '../../components/Input/CodeConfirmation'

const VerifyOtp = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('')

    const handleSubmit = () => {
        navigation.navigate("Login")
    }
    return (
        <View style={styles.page}>
            <AuthHeader title="Verify OTP" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={images.signup3} style={{ height: SIZES.height * 0.38, width: SIZES.width * 0.7, alignSelf: 'center' }} />
                <Text style={{ ...FONTS.h3, color: COLORS.black, marginRight: SIZES.h1 * 3 }}>Enter Verification Code</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black, marginTop: SIZES.h4 }}>We have send an email to:</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>jewoolafavour2020@gmail.com</Text>
                <View style={{ marginTop: SIZES.h2 }}>
                    <ConfirmationCodeField />
                    {/* BUTTONS */}
                    <FormButton title="Verify" onPress={() => handleSubmit()}
                        btnStyle={{ marginTop: SIZES.h1 * 1.5 }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default VerifyOtp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
    },
})