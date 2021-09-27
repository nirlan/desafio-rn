import React from 'react';
import { Text, View, Image } from 'react-native';

import imagem from '../../../assets/rolo-de-filme.png';

export default function Detalhes() {
    return <View>
        {/* <Text>{route}</Text>; */}
        <Image source={imagem} />
    </View>
}

// let posterPath = "https://image.tmdb.org/t/p/w500";