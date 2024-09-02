import { StyleSheet, Text, View, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
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
            <View style={{ paddingTop: SIZES.h2, }}>
                <View style={{ paddingHorizontal: SIZES.width * 0.03, marginBottom: SIZES.h1 * 2.5 }}>
                    <TouchableOpacity style={styles.skipCtn}>
                        <Text style={{ ...FONTS.body4b, color: COLORS.primary }}>skip</Text>
                    </TouchableOpacity>
                </View>
                <Image source={item.image} style={{ width: SIZES.width * 0.8, height: SIZES.height * 0.3, borderRadius: -SIZES.h1 * 2, alignSelf: "center" }} />
                <View style={{ paddingHorizontal: SIZES.width * 0.05, paddingTop: SIZES.h1 * 1.7, paddingRight: SIZES.width * 0.1 }}>
                    <Text style={{ ...FONTS.h1, textAlign: 'center', color: COLORS.primary, }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body5, color: COLORS.primary, fontFamily: "Mont-Medium", textAlign: 'center', marginTop: SIZES.h4, }}>{item.text} </Text>
                </View>
            </View>
        )
    }
    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Image source={icons.arrowright3} style={{ height: SIZES.h2, width: SIZES.h1, tintColor: COLORS.gray4 }} />
            </View>
        )
    }

    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Image source={icons.arrowright3} style={{ height: SIZES.h2, width: SIZES.h1, tintColor: COLORS.gray4 }} />
            </View>
        )
    }

    const _renderSkipButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Image source={icons.arrowleft3} style={{ height: SIZES.h2, width: SIZES.h1, tintColor: COLORS.gray4 }} />
            </View>
        )
    }

    const _onEndReached = () => {
        dispatch(updateOnboarding(true))
        navigation.replace("CreateAccount")
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.grey2, paddingBottom: SIZES.h3 }}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <AppIntroSlider
                data={slides}
                renderItem={_renderItem}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                renderSkipButton={_renderSkipButton}
                onDone={_onEndReached}
                onSkip={_onEndReached}
                // dotClickEnabled={true}
                showNextButton={true}
                showDoneButton={true}
                showSkipButton={true}
                dotStyle={{ height: 7, width: 20, backgroundColor: COLORS.gray4, borderRadius: 100, }}
                activeDotStyle={{ backgroundColor: "#001EC5", height: 7, width: 20, borderRadius: 100, }}
            // bottomButton={true}
            />
        </View>
    )
};

export default IntroSlider;

const styles = StyleSheet.create({
    buttonCircle: {
        height: SIZES.h1 * 1.7,
        width: SIZES.h1 * 3,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: SIZES.base,
        borderColor: COLORS.chocolateBackground,
        justifyContent: 'center',
        alignItems: 'center',
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
    skipCtn: {
        height: SIZES.h1 * 1.2,
        width: SIZES.h1 * 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.base,
        justifyContent: 'center',
        alignItems: 'center',
    },
});