import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const FormInput = ({ title, placeholder, keyboardType, eyeoff, value, setValue, }) => {
    const [hide, setHide] = useState(false);
    return (
        <View>
            <Text style={{ ...FONTS.body4, color: COLORS.black2, fontFamily: "Mont-Regular" }}>{title}</Text>
            <View style={styles.container}>
                <TextInput
                    placeholder={placeholder}
                    style={{ ...FONTS.body4b, color: "#040B1B", flex: 1 }}
                    placeholderTextColor={COLORS.primary}
                    keyboardType={keyboardType}
                    value={value}
                    // defaultValue='ssssjj'
                    onChangeText={setValue}
                />
                {eyeoff &&
                    <TouchableOpacity onPress={() => setHide(!hide)}>
                        <Image source={hide ? icons.eyeclose : icons.eyeclose} style={{ height: SIZES.h2 * 0.9, width: SIZES.h2 * 0.9 }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        height: SIZES.h1 * 1.8,
        borderWidth: 0.8,
        borderRadius: SIZES.base * 0.8,
        marginTop: SIZES.base * 0.7,
        paddingLeft: SIZES.h5,
        paddingRight: SIZES.h5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.h3,
        borderColor: COLORS.primary,
    },
})