import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "../screens/LoginScreen";
import {Routes} from "../navigation/Routes"
import {TermsScreen} from "../screens/TermsScreen";


export default function AuthNavigator() {

    const Stack = createNativeStackNavigator();
    return (

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
                <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
            </Stack.Navigator>

    );
}