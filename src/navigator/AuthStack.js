import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Auth/SplashScreen';
import IntroSlider from '../screens/Auth/IntroSlider';
import CreateAccount from '../screens/Auth/CreateAccount';
import CreateAccountPassword from '../screens/Auth/CreateAccountPassword';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
import VerifyOtp from '../screens/Auth/VerifyOtp';
import VerifyForgotPassword from '../screens/Auth/VerifyForgotPassword';


const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='IntroSlider' component={IntroSlider} />
            <Stack.Screen name='VerifyOtp' component={VerifyOtp} />
            <Stack.Screen name='CreateAccount' component={CreateAccount} />
            <Stack.Screen name='CreateAccountPassword' component={CreateAccountPassword} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='VerifyForgotPassword' component={VerifyForgotPassword} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})