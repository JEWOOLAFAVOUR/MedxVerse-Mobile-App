import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, images, icons } from '../../constants'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { makeSecurity } from '../../components/Template/security'
import { sendToast } from '../../components/Template/utilis'
import { updateUserAuthDetails } from '../../redux/actions/midAction'
import AuthHeader from '../../components/Header/AuthHeader'

const CreateAccount = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const handleSubmit = () => {
        const body = { firstName, lastName, email }
        const securityErrors = makeSecurity('register', body);

        if (securityErrors.length > 0) {
            sendToast('error', securityErrors[0]);
            console.log('erroo', securityErrors[0]);
            return;
        }
        try {
            dispatch(updateUserAuthDetails({ ...body }))
            navigation.navigate("CreateAccountPassword")
        } catch (error) {
            sendToast('error', error.message);
        }
    }



    return (
        <ScrollView style={styles.page}>
            <View style={{ marginTop: SIZES.h1 }}>
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Create account</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body4, fontFamily: "Mont-Regular" }}>Already with MedXVerse?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ textDecorationLine: 'underline', ...FONTS.body4, color: COLORS.primary, fontFamily: "Mont-Regular" }}> Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* INPUT */}
            <View style={{ marginTop: SIZES.h1, marginBottom: SIZES.h2 }}>
                <FormInput title="Name" placeholder="John Doe" />
                <FormInput title="Email" placeholder="johndoe@gmail.com" />
                <FormInput title="Phone number" placeholder="080123456789" />
                <FormInput title="Display Name" placeholder="JohnDoe" />
            </View>
            {/* BUTTON */}
            <FormButton title="Create Account" onPress={() => navigation.navigate('CreateAccountPassword')} />
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

export default CreateAccount;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        paddingTop: SIZES.h4,
    },
})