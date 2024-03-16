import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        navigation.navigate('VerifyOtp')
    }
    return (
        <View style={styles.page}>
            <AuthHeader title="Forget Password" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={images.signin} style={{ height: SIZES.height * 0.38, width: SIZES.width * 0.7, alignSelf: 'center' }} />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...FONTS.body3c, color: COLORS.black, textAlign: 'center', marginHorizontal: SIZES.h1 }}>You can request your password reset below.</Text>
                    <Text style={{ ...FONTS.body3c, color: COLORS.black, textAlign: 'center', marginHorizontal: SIZES.h1 }}>We will send a security code to the email address, please make sure it is correct.</Text>
                </View>
                <View style={{ marginTop: SIZES.h5 }}>
                    <View style={{ marginVertical: SIZES.h1 }}>
                        <FormInput placeholder="Email" />
                    </View>
                    {/* BUTTONS */}
                    <FormButton title="Request Password Reset" onPress={() => handleSubmit()} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        // paddingTop: SIZES.h4,
    },
})