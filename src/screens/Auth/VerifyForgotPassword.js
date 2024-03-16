import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import { registerUser } from '../../api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Roller, sendToast } from '../../components/Template/utilis'
import { updateUserAuthDetails } from '../../redux/actions/midAction'
import { makeSecurity } from '../../components/Template/security'

const VerifyForgotPassword = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [token, setToken] = useState("")
    const [load, setLoad] = useState(false);
    const userAuth = useSelector(state => state?.mid?.userAuth);

    const [passwordValidations, setPasswordValidations] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        symbol: false,
    });
    const [confirmPasswordValidations, setConfirmPasswordValidations] = useState({
        match: false,
    });
    const handlePasswordChange = (value) => {
        setPassword(value);

        const validations = {
            length: value.length >= 7,
            uppercase: /[A-Z]/.test(value),
            lowercase: /[a-z]/.test(value),
            number: /\d/.test(value),
            symbol: /[^A-Za-z0-9]/.test(value),
        };

        setPasswordValidations(validations);
    };

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        const match = value === password;
        setConfirmPasswordValidations({ match });
    };

    const handleSubmit = async () => {
        // navigation.navigate("Main", { screen: "Bottom" })
        console.log('from redux', userAuth)
        const body = { password, confirmPassword };
        const pass = { password }
        const securityErrors = makeSecurity('password', body);

        if (securityErrors.length > 0) {
            sendToast('error', securityErrors[0]);
            console.log('erroo', securityErrors[0]);
            return;
        }
        try {

            setLoad(true)
            const response = await registerUser(userAuth);
            setLoad(false)
            console.log('response fro forgot api', response)

            // navigation.navigate("Main", { screen: "Bottom" })
        } catch (error) {
            sendToast('error', error.message);
        }
    }


    return (
        <View style={styles.page}>
            {load && <Roller visible={true} />}
            <View style={{}}>
                <StatusBar backgroundColor={COLORS.offwhite} barStyle="dark-content" />
                <Text style={{ ...FONTS.h1a, color: COLORS.dark, }}>Password</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5, marginBottom: SIZES.h1 }}>
                    <View style={{ height: 2, width: SIZES.h1 * 1.4, backgroundColor: "#001EC5", borderRadius: 1, }} />
                    <View style={{ marginLeft: SIZES.base, height: 2, width: SIZES.h1 * 1.4, backgroundColor: "#001EC5", borderRadius: 1, }} />
                    <View style={{ marginLeft: SIZES.base, height: 2, width: SIZES.h1 * 1.4, backgroundColor: "#001EC5", borderRadius: 1, }} />
                </View>
                {/* INPUT */}
                <FormInput title="Enter Otp" eyeoff={true} value={token} setValue={setToken} keyboardType="numeric" />
                <FormInput title="Password" eyeoff={true} value={password} setValue={handlePasswordChange} />
                <FormInput title="Confirm Password" eyeoff={true} value={confirmPassword} setValue={handleConfirmPasswordChange} />
                {/* CHECKING */}
                <View style={styles.container}>
                    <Text style={{ ...FONTS.body4b, color: COLORS.black }}>Your password must be:</Text>
                    <View style={{ marginTop: SIZES.base * 0.3 }}>
                        <View>
                            {/* Display icons based on the password validations */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.base * 0.5 }}>
                                <Image source={passwordValidations.length ? icons.check : icons.close} style={{ height: SIZES.h2 * 0.7, width: SIZES.h2 * 0.7 }} />
                                <Text style={{ fontSize: SIZES.body5, color: COLORS.black2, marginLeft: SIZES.base * 1.2 }}>At least, 7 characters long.</Text>
                            </View>
                            {/* UPPER  */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.base * 0.5 }}>
                                <Image source={passwordValidations.uppercase ? icons.check : icons.close} style={{ height: SIZES.h2 * 0.7, width: SIZES.h2 * 0.7 }} />
                                <Text style={{ fontSize: SIZES.body5, color: COLORS.black2, marginLeft: SIZES.base * 1.2 }}>Contains one uppercase letter.</Text>
                            </View>
                            {/* LOWER */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.base * 0.5 }}>
                                <Image source={passwordValidations.lowercase ? icons.check : icons.close} style={{ height: SIZES.h2 * 0.7, width: SIZES.h2 * 0.7 }} />
                                <Text style={{ fontSize: SIZES.body5, color: COLORS.black2, marginLeft: SIZES.base * 1.2 }}>Contains one lower case letter.</Text>
                            </View>
                            {/* NUMBER */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.base * 0.5 }}>
                                <Image source={passwordValidations.number ? icons.check : icons.close} style={{ height: SIZES.h2 * 0.7, width: SIZES.h2 * 0.7 }} />
                                <Text style={{ fontSize: SIZES.body5, color: COLORS.black2, marginLeft: SIZES.base * 1.2 }}>Contains a number.</Text>
                            </View>
                            {/* SYMBOL */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.base * 0.5 }}>
                                <Image source={passwordValidations.symbol ? icons.check : icons.close} style={{ height: SIZES.h2 * 0.7, width: SIZES.h2 * 0.7 }} />
                                <Text style={{ fontSize: SIZES.body5, color: COLORS.black2, marginLeft: SIZES.base * 1.2 }}>Contains a symbol.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* CHECKING END */}
            </View>
            <View style={{ marginTop: SIZES.h1 * 5.5 }}>
                <FormButton title="Continue" onPress={() => handleSubmit()} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5, alignSelf: 'center' }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black, fontFamily: "Satoshi-Black" }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default VerifyForgotPassword

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.offwhite,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h4,
    },
    container: {
        height: SIZES.h1 * 5,
        backgroundColor: COLORS.grey3,
        borderRadius: SIZES.base,
        paddingHorizontal: SIZES.h4,
        justifyContent: 'center',
    },
})