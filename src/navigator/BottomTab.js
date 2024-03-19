import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import MessageScreen from '../screens/Main/Message/MessageScreen';
import NotificationScreen from '../screens/Main/Notification/NotificationScreen';
import GameScreen from '../screens/Main/Game/GameScreen';
import MoreScreen from '../screens/Main/More/MoreScreen';


const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                tabBarStyle: {
                    ...FONTS.h5,
                    color: 'red'
                },
                tabBarStyle: {
                    height: SIZES.h1 * 1.9,
                    backgroundColor: COLORS.white,
                    borderTopWidth: 1,
                },
                tabBarLabel: ({ focused }) => <Text style={{ fontSize: SIZES.body5, color: focused ? COLORS.secondary : COLORS.black, marginBottom: 5 }}>{route.name}</Text>,
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? icons.home : icons.home
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'Message') {
                        iconName = focused ? icons.message : icons.message
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'Notification') {
                        iconName = focused ? icons.notification : icons.notification
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'Game') {
                        iconName = focused ? icons.game : icons.game
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'More') {
                        iconName = focused ? icons.more : icons.more
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    }
                    return <Image source={iconName} style={{ height: SIZES.h3, width: SIZES.h3, tintColor: colour }} />
                },
                headerShown: false
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Message' component={MessageScreen} />
            <Tab.Screen name='Notification' component={NotificationScreen} />
            <Tab.Screen name='Game' component={GameScreen} />
            <Tab.Screen name='More' component={MoreScreen} />

        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})