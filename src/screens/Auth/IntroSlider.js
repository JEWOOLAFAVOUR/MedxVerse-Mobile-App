import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import { COLORS, images, icons, SIZES, COLORSONTS } from '../../constants/';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { FONTS } from '../../constants/';
import { updateOnboarding } from '../../redux/actions/authAction';


const IntroSlider = ({ ...props }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const slides = [
        {
            key: 'slide1',
            image: images.slide1,
            title: "Welcome To MedXverse",
            text: "Explore A World Of Medical Knowledge, Connect With Peers, And Unlock Endless Learning Opportunities At MedXverse.",
        },
        {
            key: 'slide2',
            image: images.slide2,
            title: "Discover Medical Insights",
            text: "Dive Into A Treasure Trove Of Medical Wisdom, Curated Just For You. Start Your Journey To Expertise With Our Comprehensive Insights.",
        },
        {
            key: 'slide3',
            image: images.slide3,
            title: "Join The Medical Learning Community",
            text: "Step Into A Vibrant Community Of Medical Enthusiasts And Professionals. Share, Learn, And Grow Together On Our Platform Dedicated To Medical Education.",
        },
    ];
    const _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    // height: screenHeight,
                    // flex: 1,
                    backgroundColor: COLORS.white,
                }}>
                <Image source={item.image} style={{ width: SIZES.width, height: SIZES.height * 0.5, borderRadius: -SIZES.h1 * 2 }} />
                <View style={{ paddingHorizontal: SIZES.width * 0.08, paddingTop: SIZES.h1 * 1.7, paddingRight: SIZES.width * 0.1 }}>
                    <Text style={{ fontSize: SIZES.h1, color: COLORS.dark, fontFamily: "Satoshi-Black" }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3a, color: "#040B1B", marginTop: SIZES.h4, }}>{item.text} </Text>
                </View>
            </View>
        )
    }
    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{ ...FONTS.body3a, color: COLORS.white }}>Coninue</Text>
            </View>
        )
    }

    const _renderDoneButton = () => {
        return (
            <View>
                <View style={styles.buttonCircle}>
                    <Text style={{ ...FONTS.body3a, color: COLORS.white }}>Done</Text>
                </View>
                <_renderSkipButton />
            </View>
        )
    }

    const _renderSkipButton = () => {
        return (
            <View style={{ marginTop: SIZES.h4, marginBottom: SIZES.h5 }}>
                <Text style={{ ...FONTS.body3a, color: COLORS.black, textAlign: 'center', fontFamily: "Satoshi-Medium" }}>Skip</Text>
            </View>
        )
    }

    const _onEndReached = () => {
        dispatch(updateOnboarding(true))
        navigation.replace("VerifyNumber")
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <AppIntroSlider
                data={slides}
                renderItem={_renderItem}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                renderSkipButton={_renderSkipButton}
                onDone={_onEndReached}
                onSkip={_onEndReached}
                dotClickEnabled={true}
                showNextButton={true}
                showDoneButton={true}
                showSkipButton={true}
                dotStyle={{ height: 7, width: 7, backgroundColor: '#D9D9D9', borderRadius: 100, marginBottom: SIZES.height * 0.56 }}
                activeDotStyle={{ backgroundColor: "#001EC5", height: 7, width: 20, borderRadius: 100, marginBottom: SIZES.height * 0.56 }}
                bottomButton={true}
            />
        </View>
    )
};

export default IntroSlider;

const styles = StyleSheet.create({
    buttonCircle: {
        height: SIZES.h1 * 1.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
    },
    skipView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SIZES.h4,
    },
    imageSlide: {
        height: SIZES.height * 0.919,
        width: SIZES.width * 0.9,
        marginTop: SIZES.base * 1.3,
        borderRadius: SIZES.h1 * 1.2,
    },
    slideText: {
        // ...FONTS.navTitle,
        fontSize: SIZES.navTitle * 1.3,
        color: COLORS.white,
        fontWeight: 'bold',
    },
});