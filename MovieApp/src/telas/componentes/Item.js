import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Item({ item : { nome, imagem } }) {
    return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Text style={estilos.nome}>{ nome }</Text>
    </View>
}

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
    }
});