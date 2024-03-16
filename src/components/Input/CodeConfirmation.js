import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    // root: { flex: 1, },
    //   title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: { marginTop: SIZES.h1 * 1.2 },
    cell: {
        width: SIZES.h1 * 1.6,
        height: SIZES.h1 * 1.6,
        // lineHeight: 38,
        fontSize: 28,
        borderWidth: 1,
        // borderBottomWidth: 1,
        borderColor: COLORS.dark,
        textAlign: 'center',
        color: 'black',
        borderRadius: SIZES.base,
    },
    root: {
        paddingHorizontal: SIZES.width * 0.05,
        marginBottom: SIZES.h2,
    },
    focusCell: {
        borderColor: 'gray',
    },
});

const CELL_COUNT = 5;

const ConfirmationCodeField = ({ title, value, setValue }) => {
    //   const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            {/* <Text style={styles.title}>{title}</Text> */}
            <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="phone-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View key={index} onLayout={getCellOnLayoutHandler(index)}>
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default ConfirmationCodeField;