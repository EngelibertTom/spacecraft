import { View, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import { Button } from 'react-native-paper';
import Header from "../components/Header";


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/*<Text style={styles.spacecraft} variant="displayMedium">*/}
                {/*    SPACECRAFT*/}
                {/*</Text>*/}

                <Header title="SPACECRAFT"></Header>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(password)}
                    style={styles.input}
                />
                <Button icon="login" mode="contained" onPress={() => console.log('Pressed')}>
                    Login
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
       backgroundColor: 'purple',
        width:width,
        height:500,
        justifyContent:'center',
        alignItems:'center'
    },

    spacecraft: {

        color:'white',

    },

    inputContainer: {

        width:250,
        justifyContent:'center',
        alignSelf:'center'

    },
    input: {
        marginBottom: 10,
        marginTop: 10,
    },
});
