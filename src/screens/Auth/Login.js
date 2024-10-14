import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import { makeSecurity } from '../../components/Template/security'
import { Roller, sendToast } from '../../components/Template/utilis'
import FormButton2 from '../../components/Button/FormButton2'
import { loginUser } from '../../api/auth'

const Login = () => {
    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async () => {
        const body = { email, password }
        const securityErrors = makeSecurity('login', body);

        if (securityErrors.length > 0) {
            sendToast('error', securityErrors[0]);
            console.log('erroo', securityErrors[0]);
            return;
        }
        try {
            setLoad(true)
            const { status, data } = await loginUser(body);
            setLoad(false)

            console.log('data from login', data)

            if (data?.success === true) {
                sendToast('success', data?.message)
                navigation.navigate("Main", { screen: "Bottom" })
            } else if (data?.checkStatus === "verify-later") {
                sendToast('error', data?.message)
                navigation.navigate("VerifyOtp")
            } else {
                sendToast('error', data?.message)
            }

        } catch (error) {
            console.log('error from login', error)
        }
        // navigation.replace("Main", { screen: "Bottom" });
    };

    return (
        <ScrollView style={styles.page}>
            {load && <Roller visible={load} />}
            <View style={{ marginTop: SIZES.h1 }}>
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Sign In</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body4, fontFamily: "Mont-Regular" }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                        <Text style={{ textDecorationLine: 'underline', ...FONTS.body4, color: COLORS.primary, fontFamily: "Mont-Regular" }}> Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* INPUT */}
            <View style={{ marginTop: SIZES.h1, marginBottom: SIZES.h2 }}>
                <FormInput title="Email"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    setValue={setEmail}
                />
                <FormInput
                    title="Password"
                    placeholder="*********"
                    eyeoff={true}
                    value={password}
                    setValue={setPassword}
                />
            </View>
            {/* BUTTON */}

            <FormButton title="Sign In" onPress={() => handleSubmit()} />
            <FormButton2 title="Forgot Password?" onPress={() => navigation.navigate("ForgotPassword")}
                btnStyle={{ marginTop: SIZES.h1 }} />
            {/* FOOTER */}
            <View style={{ marginTop: SIZES.h1 }}>
                <Text style={{ ...FONTS.body4, color: COLORS.primary, textAlign: 'center', fontFamily: "Mont-Regular" }}>Create Account with</Text>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-around', marginTop: SIZES.h2 }}>
                    <Image source={icons.apple} style={{ height: SIZES.h1 * 1.11, width: SIZES.h1 }} />
                    <Image source={icons.google} style={{ height: SIZES.h1, width: SIZES.h1 }} />
                    <Image source={icons.facebook} style={{ height: SIZES.h1, width: SIZES.h1 }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        paddingTop: SIZES.h4,
    },
})