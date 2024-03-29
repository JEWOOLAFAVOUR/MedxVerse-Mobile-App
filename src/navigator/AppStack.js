import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ForumScreen from '../screens/Main/Message/components/ForumScreen';


const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Bottom' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Bottom' component={BottomTab} />
            {/* HOME */}

            {/* MESSAGE */}
            <Stack.Screen name='ForumScreen' component={ForumScreen} />
        </Stack.Navigator>



    )
}

export default AppStack

const styles = StyleSheet.create({})