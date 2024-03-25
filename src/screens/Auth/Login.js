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

const Login = () => {
    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = () => {
        const body = { email, password }
        const securityErrors = makeSecurity('login', body);

        if (securityErrors.length > 0) {
            sendToast('error', securityErrors[0]);
            console.log('erroo', securityErrors[0]);
            return;
        }
        // navigation.replace("Main", { screen: "Bottom" });
    };

    return (
        <ScrollView style={styles.page}>
            <View style={{ marginTop: SIZES.h1 }}>
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Sign In</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body4, }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ textDecorationLine: 'underline', ...FONTS.body4, color: COLORS.primary }}> Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* INPUT */}
            <View style={{ marginTop: SIZES.h1, marginBottom: SIZES.h2 }}>
                <FormInput title="Email" placeholder="John Doe" />
                <FormInput title="Password" placeholder="johndoe@gmail.com" eyeoff={true} />
            </View>
            {/* BUTTON */}
            <FormButton title="Sign In" />
            <FormButton2 title="Forgot Password?" btnStyle={{ marginTop: SIZES.h1 }} />
            {/* FOOTER */}
            <View style={{ marginTop: SIZES.h1 }}>
                <Text style={{ ...FONTS.body4, color: COLORS.primary, textAlign: 'center' }}>Create Account with</Text>
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
        // paddingTop: SIZES.h4,
    },
})