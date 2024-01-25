import React from "react";
import {ActivityIndicator, StyleSheet, StatusBar, View, Text, FlatList, SafeAreaView} from "react-native";
import { useStarships } from "../hooks/useStarships";
import { StarshipCard } from "../components/StarshipCard";
import {Offline} from "../components/Offline";

export type Starship = {
    name: string;
    model: string;
    cost_in_credits: string;
    crew: string;
    hyperdrive_rating: string;
};

export const StarshipFeedScreen = () => {
    const { isLoading, isError, data, error } = useStarships();

    if (isLoading) {
        return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="black" />
            </View>
        )
    }
    if (isError) {
        return <Text>Error: {error.message}</Text>;
    }

    const starships = data.results;
    const renderItem = ({ item }: { item: Starship }) => (
        <StarshipCard item={item}></StarshipCard>
    );

    return (


        <View style={styles.container}>
            <Offline></Offline>
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
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#868186",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    loading: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

});
