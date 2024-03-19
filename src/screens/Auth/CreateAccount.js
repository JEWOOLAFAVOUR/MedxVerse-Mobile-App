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
        <View style={styles.page}>
            {/* HEADER */}
            <View>
                <Text>Create account</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...FONTS.body4, }}>Already with MedXVerse?</Text>
                    <TouchableOpacity>
                        <Text> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* INPUT */}
            <View>
                <FormInput />
            </View>
        </View>
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