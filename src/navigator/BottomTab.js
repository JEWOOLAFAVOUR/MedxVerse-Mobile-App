import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import ShopScreen from '../screens/Main/Shop/ShopScreen';
import ExploreScreen from '../screens/Main/Explore/ExploreScreen';
import TopChefScreen from '../screens/Main/TopChef/TopChefScreen';
import InboxScreen from '../screens/Main/Inbox/InboxScreen';
import AccountScreen from '../screens/Main/Account/AccountScreen';


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
                    if (route.name === 'Shop') {
                        iconName = focused ? icons.shop : icons.shop
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'Explore') {
                        iconName = focused ? icons.explore : icons.explore
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'TopChefs') {
                        iconName = focused ? icons.topchef : icons.topchef
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'Inbox') {
                        iconName = focused ? icons.inbox : icons.inbox
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    } else if (route.name === 'Account') {
                        iconName = focused ? icons.account : icons.account
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.secondary : COLORS.black
                    }
                    return <Image source={iconName} style={{ height: SIZES.h3, width: SIZES.h3, tintColor: colour }} />
                },
                headerShown: false
            })}
        >
            <Tab.Screen name='Shop' component={ShopScreen} />
            <Tab.Screen name='Explore' component={ExploreScreen} />
            <Tab.Screen name='TopChefs' component={TopChefScreen} />
            <Tab.Screen name='Inbox' component={InboxScreen} />
            <Tab.Screen name='Account' component={AccountScreen} />

        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})