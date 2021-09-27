import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import logo from '../../../../assets/popcorn.png';

export default function Topo() {
    return <View style={estilos.topo}>
        <Image source={logo} style={estilos.logo} />
        <Text style={estilos.titulo}>Movie App</Text>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        flexDirection: "row",
        backgroundColor: "#000000",
        alignItems: "center",
        height: 72,
    },
    logo: {
        width: 48,
        height: 48,
        marginLeft: 16,
    },
    titulo: {
        color: "#FFFFFF",
        width: "100%",
        paddingLeft: 24,
        fontSize: 24,
        lineHeight: 36,
    }
});