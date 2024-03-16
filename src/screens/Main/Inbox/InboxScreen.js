import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONTS, icons, images, SIZES } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
// import HeaderA from "../../components/Header/HeaderA";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function InboxScreen() {
    const navigation = useNavigation();
    const [notification, setNotification] = useState([])


    const RenderEmpty = () => {
        return (
            <View>
                <Image source={images.inbox} style={{
                    height: SIZES.h1 * 2.4,
                    width: SIZES.h1 * 2.8,
                    alignSelf: "center",
                    marginTop: SIZES.h2 * 1.3,
                }}
                />
                <Text
                    style={{
                        ...FONTS.body2a,
                        color: COLORS.black,
                        textAlign: "center",
                        marginTop: SIZES.h2 * 1.2,
                        fontWeight: "600",
                    }}
                >
                    You don't have any notification.
                </Text>
            </View>
        );
    };
    return (
        <View style={styles.page}>
            {/* <HeaderA title="Notification" /> */}
            <View style={{ marginTop: SIZES.h3 }}>
                <FlatList
                    data={notification}
                    ListEmptyComponent={RenderEmpty}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("NotificationScreenDetails")}
                                style={styles.container}
                            >
                                <View>
                                    <Text
                                        style={{
                                            ...FONTS.body3,
                                            color: COLORS.primary,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                                <Text
                                    numberOfLines={1}
                                    style={{ ...FONTS.body4b, color: COLORS.black }}
                                >
                                    {item.detail}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.offwhite,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h3,
        paddingBottom: SIZES.h1 * 1.2,
    },
    container: {
        height: SIZES.h1 * 2.5,
        // borderWidth: 1,
        marginBottom: SIZES.h3,
        paddingHorizontal: SIZES.width * 0.05,
        borderRadius: SIZES.base,
        justifyContent: "center",
        backgroundColor: COLORS.white,
    },
});
