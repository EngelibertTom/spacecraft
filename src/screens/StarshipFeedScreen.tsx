import React, {useEffect, useState} from "react";
import {StyleSheet, StatusBar, View, Text, FlatList, ScrollView, Image} from "react-native";
import { default as data } from "../../api/data.json";
import {StarshipCard} from "../components/StarshipCard";


export type Starship = {
    name: string;
    model: string;
    cost_in_credits: string;
    crew: string;
    hyperdrive_rating: string;
}
export const StarshipFeedScreen = () => {
    const starships = data.results;
    const renderItem = ({ item }:{item:Starship}) => (

        <StarshipCard item={item}></StarshipCard>

    );

    return (

            <View>
            <FlatList
                data={starships}
                renderItem={renderItem}
                keyExtractor={(item) => item.url}
            />
                </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: "#ffffff",
        borderWidth:0.5,
        borderRadius:10,
        borderColor:"#868186",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

});
