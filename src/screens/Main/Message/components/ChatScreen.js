import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../constants'

const ChatScreen = () => {
    return (
        <View style={styles.page}>
            <Text>ChatScreen</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
});