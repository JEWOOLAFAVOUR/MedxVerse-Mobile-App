import { StyleSheet, StatusBar, View, Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, images, SIZES } from '../../constants';
import { useSelector } from 'react-redux'


const SplashScreen = () => {
    const navigation = useNavigation();

    const selector = useSelector(state => state.auth.isLoggedIn)
    const onboard = useSelector(state => state.auth.isOnboardingDisabled)
    console.log('.........', selector)
    const checkNavigation = () => {
        if (selector === true) {
            setTimeout(() => {
                navigation.replace('Main', { screen: 'BottomTab' })
            }, 2000);
        } else if (onboard) {
            setTimeout(() => {
                // navigation.replace('VerifyNumber')
                // navigation.replace('IntroSlider')
                navigation.replace('CreateAccount')
            }, 2000);
        } else {
            setTimeout(() => {
                navigation.replace('CreateAccount');
            }, 1000);
        }
    }

    useEffect(() => {
        checkNavigation();
    }, [])
    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
            <Image source={images.logo1} style={{ height: SIZES.h1 * 5, width: SIZES.h1 * 5, }} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});