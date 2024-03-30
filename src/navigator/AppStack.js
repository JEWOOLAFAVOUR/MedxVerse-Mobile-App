import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ForumScreen from '../screens/Main/Message/components/ForumScreen';
import FriendRequest from '../screens/Main/Home/components/FriendRequest';
import SearchScreen from '../screens/Main/Home/components/SearchScreen';
import ChatScreen from '../screens/Main/Message/components/ChatScreen';


const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Bottom' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Bottom' component={BottomTab} />
            {/* HOME */}
            <Stack.Screen name='FriendRequest' component={FriendRequest} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />

            {/* MESSAGE */}
            <Stack.Screen name='ForumScreen' component={ForumScreen} />
            <Stack.Screen name='ChatScreen' component={ChatScreen} />
        </Stack.Navigator>



    )
}

export default AppStack

const styles = StyleSheet.create({})