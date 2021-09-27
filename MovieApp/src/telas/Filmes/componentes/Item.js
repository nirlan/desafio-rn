import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../../../../RootNavigation';

export default function Item({ item }) {    
    
    return <TouchableOpacity onPress={() => RootNavigation.navigate('Detalhes')}>
        <View key={item.id} style={estilos.item}>
            <Image source={{ uri: posterPath + item.poster_path }} style={estilos.imagem} />
            <Text style={estilos.nome}>{item.title}</Text>
        </View>
    </TouchableOpacity>
}

let posterPath = "https://image.tmdb.org/t/p/w92";

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        height: 72,
    },
    imagem: {
        width: 48,
        height: 48,
        marginLeft: 16,
    },
    nome: {
        color: "#000000",
        width: "100%",
        paddingLeft: 24,
        fontSize: 16,
        lineHeight: 26,
    },
});