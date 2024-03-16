import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, images, FONTS } from '../../constants';
import FormButton from '../../components/Button/FormButton';

const IntroSlider = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={{ alignItems: 'center' }}>
                <Image source={images.suru_logo} style={{ height: SIZES.h1 * 1.2, width: SIZES.h1 * 4, marginBottom: SIZES.h4 }} />
                <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Bottom" })}>
                    <Image source={images.front} style={{ height: SIZES.height * 0.43, width: SIZES.width * 0.7, }} />
                </TouchableOpacity>
                <Text style={{ ...FONTS.h2, color: COLORS.black, marginTop: SIZES.h4, marginHorizontal: SIZES.width * 0.2, textAlign: 'center' }}>Relax and Shop from Suru</Text>
                <View style={{ paddingHorizontal: SIZES.width * 0.18, marginBottom: SIZES.h2 }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.black, textAlign: 'center', }} >Shop online and get grocories delivered from stores to your home in as fast as 1 hour.</Text>
                </View>
            </View>
            <FormButton title='Sign up' onPress={() => navigation.navigate("CreateAccount")} />
            <FormButton title='Sign in' onPress={() => navigation.navigate("Login")}
                textCtn={{ color: COLORS.primary, ...FONTS.h3 }}
                btnStyle={{ backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.primary, }} />
        </View>
    )
}

export default IntroSlider

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h1,
        paddingHorizontal: SIZES.width * 0.04,
    },
})