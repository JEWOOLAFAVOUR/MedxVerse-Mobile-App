import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import { Roller, sendToast } from '../../components/Template/utilis'
import { forgetPassword } from '../../api/auth'

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [load, setLoad] = useState(false);

    const handleSubmit = async () => {
        const body = { email }

        if (!email || email.trim() === "") {
            sendToast('error', 'Please enter a valid email')
        } else {
            setLoad(true)
            const { status, data } = await forgetPassword(body)
            setLoad(false)

            console.log('.......', data)

            if (data?.success === true) {
                sendToast('success', data?.message)
                navigation.navigate('ResetPassword', { data })
            } else {
                sendToast('error', data?.message)
            }
        }
    }
    return (
        <ScrollView style={styles.page}>
            {load && <Roller visible={load} />}
            <View style={{ marginTop: SIZES.h1 }}>
                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.arrowleft2} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h2, color: COLORS.primary, marginTop: SIZES.base }}>Forget password! Enter your email</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body5, fontFamily: "Mont-Regular" }}>Enter the email associated with your account and we'll send a verification code to your email.</Text>
                </View>
            </View>
            {/* INPUT */}
            <View style={{ marginTop: SIZES.h1, marginBottom: SIZES.h1 * 2 }}>
                <FormInput
                    title="Email"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    setValue={setEmail}
                />
            </View>

            {/* BUTTON */}
            <FormButton title="Forgot password" onPress={() => handleSubmit()} />
        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        paddingTop: SIZES.h4,
    },
})