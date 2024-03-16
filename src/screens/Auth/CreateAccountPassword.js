import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../constants'
import AuthHeader from '../../components/Header/AuthHeader'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'

const CreateAccountPassword = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        navigation.navigate("VerifyOtp")
    }
    return (
        <View style={styles.page}>
            <AuthHeader title="Sign Up" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={images.signup2} style={{ height: SIZES.height * 0.38, width: SIZES.width * 0.7, alignSelf: 'center' }} />
                <Text style={{ ...FONTS.h3, color: COLORS.black, marginRight: SIZES.h1 * 3 }}>Enter the password</Text>
                <View style={{ marginTop: SIZES.h2 }}>
                    <FormInput placeholder="Password" />
                    <FormInput placeholder="Confirm Password" />
                    {/* BUTTONS */}
                    <FormButton title="Sign in" onPress={() => handleSubmit()}
                        btnStyle={{ marginTop: SIZES.h1 * 1.5 }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default CreateAccountPassword

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,
        // paddingTop: SIZES.h4,
    },
})