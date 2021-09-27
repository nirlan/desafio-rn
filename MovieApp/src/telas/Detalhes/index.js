import React from 'react';
import { Text, View } from 'react-native';

export default function Detalhes({ title, poster_path }) {
    return <View>
        <Text>{title}</Text>;
        <Image source={{ uri: posterPath + poster_path }} />
    </View>
}

let posterPath = "https://image.tmdb.org/t/p/w500";