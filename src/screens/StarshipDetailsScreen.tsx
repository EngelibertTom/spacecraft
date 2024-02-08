import {StyleSheet, View, Image, Dimensions} from "react-native";
import {IconButton, Text} from 'react-native-paper';
import {Offline} from "../components/Offline";
import React from "react";
import {StarshipCard} from "../components/StarshipCard";
import {useImage} from "../hooks/useImage";
import {useNavigation} from "@react-navigation/native";

var width = Dimensions.get('window').width;
export const StarshipDetailsScreen = ({ route }) => {
    // Extrayez l'objet starship des props de route
    const { starship } = route.params;

    console.log(starship)
    const name = starship.name;
    const imgUrl = useImage(name);
    const hyperdriveRating = starship.hyperdrive_rating;
    const maxAtmosphereSpeed= starship.max_atmosphering_speed


    // Vérifiez si starship existe avant de l'afficher
    if (!starship) {
        return (
            <View style={styles.container}>
                <Text>Aucun détail de vaisseau spatial trouvé.</Text>
            </View>
        );
    }

    const navigation = useNavigation();
    // Affichez les détails du vaisseau spatial
    return (
        <View style={styles.container}>

            <IconButton
                icon="close"
                onPress={() => navigation.goBack()}
            />
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imgUrl}/>
                </View>

            <View style={styles.infosContainer}>
                <View style={styles.name}><Text style={styles.nameText}>{name}</Text></View>
                <View><Text>Hyper drive rating : {hyperdriveRating}</Text></View>
                <View><Text>Speed max atmosphere : {maxAtmosphereSpeed}</Text></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {

    },
    infosContainer: {

        margin:10,
        width:'100%',
    },
    image: {
        height:250,
        width:width,
    },
    name:{
        textAlign:'left',
        paddingBottom:10,
        borderBottomWidth:1,


    },
    nameText: {
        fontWeight:'bold',
        fontSize:22,

    }
});