
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {PaperProvider, TextInput} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { NetworkProvider } from 'react-native-offline'
import Navigator from "./src/navigation/Navigator";
import {useState} from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import {AuthProvider, useAuth} from "./src/context/AuthentificationContext";
import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "./src/navigation/Routes";
import {StarshipFeedScreen} from "./src/screens/StarshipFeedScreen";
import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TermsScreen} from "./src/screens/TermsScreen";
import {LoginScreen} from "./src/screens/LoginScreen";


const queryClient = new QueryClient()

export default function App() {

   const {isSignedIn} = useAuth()
    const Stack = createNativeStackNavigator();
    return (
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
          <NetworkProvider>
          <PaperProvider>

              <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                  {isSignedIn ?
                      <Stack.Screen name={Routes.TERMS_SCREEN} component={Navigator} />
                      :
                      <Stack.Screen name={Routes.LOGIN_SCREEN} component={AuthNavigator} />}
                </Stack.Navigator>
                </NavigationContainer>
              </SafeAreaView>
      </PaperProvider>
          </NetworkProvider>
      </QueryClientProvider>
      </AuthProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
