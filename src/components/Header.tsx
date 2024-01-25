import React from 'react';
import {StyleSheet, View} from 'react-native';
import  {Text}  from 'react-native-paper'

const HeaderComponent = ({title}:{title:string}) => {
    return (
        <View>
            <Text  style={styles.spacecraft} variant="displayMedium">{title}</Text>
        </View>
    );
}

export default HeaderComponent;

const styles = StyleSheet.create({


    spacecraft: {

        color:'white',

    }
})