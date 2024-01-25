import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from "./src/screens/LoginScreen";
import {PaperProvider, TextInput} from 'react-native-paper';
import {useState} from "react";
import {TermsScreen} from "./src/screens/TermsScreen";


export default function App() {


  return (
      // <View style={styles.container}>
          <PaperProvider>
        {/*<LoginScreen/>*/}
              <TermsScreen/>
      </PaperProvider>
      // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
