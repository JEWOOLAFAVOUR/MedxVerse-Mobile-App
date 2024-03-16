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
        // const securityErrors = makeSecurity('register', body);

        // if (securityErrors.length > 0) {
        //     sendToast('error', securityErrors[0]);
        //     console.log('erroo', securityErrors[0]);
        //     return;
        // }
        // try {
        //     dispatch(updateUserAuthDetails({ ...body }))
        navigation.navigate("CreateAccountPassword")
        // } catch (error) {
        //     sendToast('error', error.message);
        // }
    }



    return (
        <View style={styles.page}>
            <AuthHeader title="Sign Up" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={images.signup1} style={{ height: SIZES.height * 0.38, width: SIZES.width * 0.7, alignSelf: 'center' }} />
                <View style={{ marginTop: SIZES.h5 }}>
                    <FormInput placeholder="Full Name" />
                    <FormInput placeholder="Phone Number" />
                    <Text style={{ ...FONTS.body3c, color: COLORS.black, marginRight: SIZES.h1 }}>We need to verify you. We will send you a one time verification code.</Text>
                    {/* BUTTONS */}
                    <View style={{ marginTop: SIZES.h1 * 1.3 }}>
                        <FormButton title="Next" onPress={() => handleSubmit()} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: SIZES.h2 }}>
                            <Text style={{ ...FONTS.body3c, color: COLORS.black }}>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ ...FONTS.body3c, color: COLORS.orange }}> Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CreateAccount;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        // paddingTop: SIZES.h4,
    },
})