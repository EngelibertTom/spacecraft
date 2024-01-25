import {Starship} from "../screens/StarshipFeedScreen";
import {Image, StatusBar, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useImage} from "../../api/useImage";


export function StarshipCard({item}:{item:Starship}) {


    const img = useImage(item.name)
    return (

        <View style={styles.item}>
            <Image style={styles.image} source={img} />
            <Text>{item.name}</Text>
            <Text>{item.model}</Text>
            <Text>{item.crew}</Text>
            {/*<Image width={50} height={50} source={{uri:'https://picsum.photos/seed/car/400/200'}}></Image>*/}


        </View>

    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: "#ffffff",
        borderWidth:0.5,
        borderRadius:10,
        borderColor:"#868186",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    image: {
        height:80,
        width:'100%',
    }

});