import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    StatusBar,
    View,
    Text,
    FlatList,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import { useStarships } from "../hooks/useStarships";
import { StarshipCard } from "../components/StarshipCard";
import {Offline} from "../components/Offline";
import {handlePress} from "react-native-paper/lib/typescript/components/RadioButton/utils";
import {Routes} from "../navigation/Routes";

export type Starship = {
    name: string;
    model: string;
    cost_in_credits: string;
    crew: string;
    hyperdrive_rating: string;
};

export const StarshipFeedScreen = ({navigation}) => {
    const { isLoading, isError, data, error } = useStarships();

    const handlePress = (item: Starship) => {
        navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, { starship: item });
    };

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
        <TouchableOpacity onPress={() => handlePress(item)}>
            <StarshipCard item={item} />
        </TouchableOpacity>
    );

    return (


        <View style={styles.container}>
            <Offline />

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
