import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import ConfirmationCodeField from '../../components/Input/CodeConfirmation'
import FormButton2 from '../../components/Button/FormButton2'
import { Roller, sendToast } from '../../components/Template/utilis'
import { resendOtp, verifyEmail } from '../../api/auth'

const VerifyOtp = ({ route }) => {
    console.log('data from route', route?.params)
    let routeData = route?.params;
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
    const [load, setLoad] = useState(false);

    const handleSubmit = async () => {
        const body = { otp, userId: routeData?.newBody?.userId }

        if (!otp || otp.length < 3) {
            sendToast('error', 'Invalid Otp')
        } else {
            setLoad(true)
            const { data, status } = await verifyEmail(body);
            setLoad(false)

            if (data?.success === true) {
                sendToast('error', data?.message);
                navigation.replace("Login");
            } else {
                sendToast('error', data?.message);
            }
        }
    };

    const handleResend = async () => {
        const body = { userId: routeData?.newBody?.userId, email: routeData?.newBody?.email }

        setLoad(true)
        const { data, status } = await resendOtp(body);
        setLoad(false)

        if (data?.success === true) {
            sendToast('success', data?.message);
        } else {
            sendToast('error', data?.message);
        }
    }

    return (
        <View style={styles.page}>
            {load && <Roller visible={load} />}
            <View style={{ marginTop: SIZES.h1 }}>
                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.arrowleft2} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h2, color: COLORS.primary, marginTop: SIZES.base }}>Check your Email! To input your OTP.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body5, fontFamily: "Mont-Regular" }}>We have sent an OTP code to your email.</Text>
                </View>
            </View>
            {/* INPUT */}
            <View style={{ marginTop: SIZES.h1, marginBottom: SIZES.h1 * 2 }}>
                <ConfirmationCodeField value={otp} setValue={setOtp} />
            </View>

            {/* BUTTON */}
            <FormButton title="Confirm OTP" onPress={() => handleSubmit()} />
            <FormButton2 title="Resend OTP" onPress={() => handleResend()} btnStyle={{ marginTop: SIZES.h1 }} />
        </View>
    )
}

export default VerifyOtp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        paddingTop: SIZES.h4,
    },
})