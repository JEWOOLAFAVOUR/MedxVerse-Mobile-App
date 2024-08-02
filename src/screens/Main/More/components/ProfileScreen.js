import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../../../constants'

const ProfileScreen = () => {
    return (
        <View style={styles.page}>
            <View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={icons.arrowleft2} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                        <Text style={{ ...FONTS.body3, color: COLORS.black, marginLeft: SIZES.h4 }}>User</Text>
                    </View>
                    <Image source={icons.care} style={{ height: SIZES.h3, width: SIZES.h3 }} />
                </View>
                {/* PROFILE PIC */}
                <View>
                    <Image source={images.avatar2} />
                </View>

            </View>


        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})