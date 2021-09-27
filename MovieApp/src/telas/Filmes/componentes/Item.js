import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Item({ item }) {
    return <>
        <View key={item.id} style={estilos.item}>
            <TouchableOpacity>
                <Image source={{ uri: posterPath + item.poster_path }} style={estilos.imagem} />
                <Text style={estilos.nome}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    </>
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