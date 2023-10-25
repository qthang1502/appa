//setup man hinh dang nhap dang ky roi goi ra App chua 2 man hinh nay
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../login/LoginScreen";
import RegisterScreen from "../login/RegisterScreen";
import Account from "../components/Account";
import BMI from "../components/BMI";

const Stack = createNativeStackNavigator ();
export const AccountStack = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Acc" component={Account} ></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen} ></Stack.Screen>
        <Stack.Screen name="BMI" component={BMI} ></Stack.Screen>
    </Stack.Navigator>
)}