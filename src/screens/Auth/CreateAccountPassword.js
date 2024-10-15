import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { makeSecurity } from '../../components/Template/security'
import { registerUser, resendOtp } from '../../api/auth'
import { Roller, sendToast } from '../../components/Template/utilis'
import { updateUserAuthDetails } from '../../redux/actions/midAction'

const CreateAccountPassword = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userAuth = useSelector(state => state?.mid?.userAuth);
    const [load, setLoad] = useState(false)

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        const body = { password, confirmPassword }
        const securityErrors = makeSecurity('password', body);

        const pass = { password }

        if (securityErrors.length > 0) {
            sendToast('error', securityErrors[0]);
            console.log('erroo', securityErrors[0]);
            return;
        }
        try {
            dispatch(updateUserAuthDetails(pass))

            console.log('comingggggggggg add data', userAuth)

            setLoad(true)
            const { status, data } = await registerUser(userAuth);
            setLoad(false)

            console.log('data of create', data)

            if (data?.checkStatus === "activated") {
                sendToast('error', data?.message)
                navigation.navigate("Login")
            } else if (data?.checkStatus === 'verify-later') {
                sendToast('error', data?.message)

                let newBody = { userId: data?.userId, email: userAuth?.email }
                let { data: newData, status } = await resendOtp(newBody)

                if (newData?.success === true) {
                    sendToast('success', newData?.message)
                    navigation.navigate('VerifyOtp', { newBody })
                } else {
                    sendToast('error', newData?.message)
                }

            } else if (data?.status === true) {
                sendToast('success', data?.message);
                navigation.navigate('VerifyOtp', { newBody: { userId: data?.data?.userId, email: data?.data?.email } })
            } else {
                sendToast('error', data?.message || data?.error)
            }

        } catch (error) {
            sendToast('error', error.message);
        }
    }

    return (
        <ScrollView style={styles.page}>
            {load && <Roller visible={load} />}
            <View style={{ marginTop: SIZES.h1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.arrowleft2} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h2, color: COLORS.primary, marginLeft: SIZES.h3 }}>Create Password</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body4, fontFamily: "Mont-Regular" }}>Used a well protected details as your password</Text>
                </View>
            </View>
            {/* INPUT */}
            <View style={{ marginTop: SIZES.h1, marginBottom: SIZES.h4 }}>
                <FormInput
                    title="Password"
                    placeholder="john@1234"
                    eyeoff={true}
                    value={password}
                    setValue={setPassword}
                />
                <FormInput
                    title="Confirm Password"
                    placeholder="john@1234"
                    eyeoff={true}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                />
            </View>
            {/* REGULATORS */}
            <View style={{ marginBottom: SIZES.h1 * 2.3 }}>
                <Text style={{ fontFamily: "Mont-Regular", fontSize: SIZES.h5, color: COLORS.primary, marginBottom: SIZES.base * 0.5 }}>- Your password must be at least 8 characters long.</Text>
                <Text style={{ fontFamily: "Mont-Regular", fontSize: SIZES.h5, color: COLORS.primary }}>- For security purposes, avoid using common words or phrases as your password.</Text>
            </View>
            {/* BUTTON */}
            <FormButton title="Create Password" onPress={() => handleSubmit()} />
        </ScrollView>
    )
}

export default CreateAccountPassword

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h4,
    },
})