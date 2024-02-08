import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "../screens/LoginScreen";
import {StarshipFeedScreen} from "../screens/StarshipFeedScreen";
import {TermsScreen} from "../screens/TermsScreen";
import {Routes} from "../navigation/Routes"
import {StarshipDetailsScreen} from "../screens/StarshipDetailsScreen";




export default function Navigator() {

    const Stack = createNativeStackNavigator();
    return (

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
                <Stack.Screen name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailsScreen} />
            </Stack.Navigator>

    );
}