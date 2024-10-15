import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { resetPassword } from '../../api/auth'
import { Roller, sendToast } from '../../components/Template/utilis'
import FormInput from '../../components/Input/FormInput'
import { makeSecurity } from '../../components/Template/security'
import FormButton from '../../components/Button/FormButton'

const ResetPassword = ({ route }) => {
    const navigation = useNavigation();

    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [load, setLoad] = useState(false);

    let routeData = route?.params;

    console.log('routtttttttttttttttt', route?.params)

    const handleSubmit = async () => {

        const body = { password, confirmPassword }
        const securityErrors = makeSecurity('password', body);

        if (!otp || otp.length < 5) {
            return sendToast('error', "otp is missing")
        }

        if (securityErrors.length > 0) {
            sendToast('error', securityErrors[0]);
            console.log('erroo', securityErrors[0]);
            return;
        }
        try {
            let newBody = { newPassword: password, otp, userId: routeData?.data?.userId }

            setLoad(true)
            const { data, status } = await resetPassword(newBody);
            setLoad(false)

            if (data?.success === true) {
                sendToast('success', data?.message)
                navigation.replace('Login')
            } else {
                sendToast('error', data?.message)
            }
        } catch (error) {
            sendToast('error', error.message);
        }
    }

    return (
        <View style={styles.page}>
            {load && <Roller visible={load} />}
            <StatusBar backgroundColor={COLORS.offwhite} barStyle='dark-content' />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={icons.arrowleft2} style={{ height: SIZES.h2, width: SIZES.h2 }} />
            </TouchableOpacity>
            <Text style={{ ...FONTS.h1a, color: COLORS.primary, marginTop: SIZES.h4 }}>Reset Your Password</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: SIZES.h3 }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Enter transaction 6-digit PIN-Code or use yout biometrics to perform action.</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>{routeData?.email}</Text>
                    {/* UNDER */}
                    <View style={{ marginTop: SIZES.h1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.h5, alignSelf: 'center' }}>
                            <Text style={{ ...FONTS.body4, color: COLORS.black }}>Didn't recieve an OTP?</Text>
                            <TouchableOpacity>
                                <Text style={{ ...FONTS.h4, fontSize: SIZES.h4 * 1.2, color: COLORS.black2, fontFamily: "Mont-Medium" }}> Resend</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ ...FONTS.body4, textDecorationLine: 'underline', color: COLORS.black2, textAlign: 'center', }}>Change Email Address</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: SIZES.h1, marginBottom: SIZES.h4 }}>
                    <FormInput
                        title="OTP"
                        placeholder="123456"
                        value={otp}
                        setValue={setOtp}
                        keyboardType={"numeric"}
                    />
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
                <View style={{ marginBottom: SIZES.h1 * 1.5 }}>
                    <Text style={{ fontFamily: "Mont-Regular", fontSize: SIZES.h5, color: COLORS.primary, marginBottom: SIZES.base * 0.5 }}>- Your password must be at least 8 characters long.</Text>
                    <Text style={{ fontFamily: "Mont-Regular", fontSize: SIZES.h5, color: COLORS.primary }}>- For security purposes, avoid using common words or phrases as your password.</Text>
                </View>
                {/* BUTTON */}
                <FormButton title="Create Password" onPress={() => handleSubmit()} />
            </ScrollView>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.offwhite,
        paddingTop: SIZES.h3,
        paddingHorizontal: SIZES.width * 0.05,
    },
})