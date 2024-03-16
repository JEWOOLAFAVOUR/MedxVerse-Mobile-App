import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import { makeSecurity } from '../../components/Template/security'
import { Roller, sendToast } from '../../components/Template/utilis'

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
        <View style={styles.page}>
            {load && <Roller visible={true} />}
            <AuthHeader title="Sign In" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={images.signin} style={{ height: SIZES.height * 0.38, width: SIZES.width * 0.7, alignSelf: 'center' }} />
                <Text style={{ ...FONTS.body3c, color: COLORS.black, marginRight: SIZES.h1 * 3 }}>Enter your phone number and password to access your account</Text>
                <View style={{ marginTop: SIZES.h5 }}>
                    <FormInput placeholder="Email" value={email} setValue={setEmail} />
                    <FormInput placeholder="Password" value={password} setValue={setPassword} />
                    <TouchableOpacity style={{ marginBottom: SIZES.h2 }} onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={{ ...FONTS.body4, color: COLORS.orange, textAlign: 'right' }}>Forget Password?</Text>
                    </TouchableOpacity>
                    {/* BUTTONS */}
                    <FormButton title="Sign in" onPress={() => handleLogin()} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ ...FONTS.body3c, color: COLORS.black }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                            <Text style={{ ...FONTS.body3c, color: COLORS.orange }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
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