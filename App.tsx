import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { LoginScreen } from "./src/screens/LoginScreen";
import {PaperProvider, TextInput} from 'react-native-paper';
import {useState} from "react";
import {TermsScreen} from "./src/screens/TermsScreen";
import {StarshipFeedScreen} from "./src/screens/StarshipFeedScreen";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient()

export default function App() {

  return (
      // <View style={styles.container}>

      <QueryClientProvider client={queryClient}>
          <PaperProvider>
        {/*<LoginScreen/>*/}
        {/*      <TermsScreen/>*/}
              <SafeAreaView style={styles.container}>
              <StarshipFeedScreen/>
              </SafeAreaView>
      </PaperProvider>
      </QueryClientProvider>

      // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
