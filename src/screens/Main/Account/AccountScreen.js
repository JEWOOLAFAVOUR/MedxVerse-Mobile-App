import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SIZES, FONTS, COLORS } from '../../../constants';

const AccountScreen = () => {
    const navigation = useNavigation();
    const profileData = [
        { id: 1, title: "Profile", iconName: "" },
        { id: 2, title: "Partner", iconName: "" },
        { id: 3, title: "Orders", iconName: "" },
        { id: 4, title: "Notification", iconName: "" },
        { id: 5, title: "Saved Items", iconName: "" },
        { id: 6, title: "Address", iconName: "" },
        { id: 7, title: "Payment", iconName: "" },
        { id: 8, title: "Contact Us", iconName: "" },
        { id: 9, title: "Privacy Policy", iconName: "" },
        { id: 10, title: "About Us", iconName: "" },
        { id: 11, title: "Log Out", iconName: "" },
    ];
    return (
        <View style={styles.page}>
            <FlatList
                data={profileData}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image source={item.iconName} />
                            <Text style={{ ...FONTS.body3, color: COLORS.black }}>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})