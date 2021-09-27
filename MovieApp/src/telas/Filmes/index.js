import React from 'react';
import { FlatList } from 'react-native';

import Topo from '../componentes/Topo';
import Item from '../componentes/Item';

import logo from '../../../assets/popcorn.png';

export default function Filmes({lista}) {
    return <>
    <FlatList
            data={lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }

            // acrescenta os demais componentes que estão fora da lista na tela
            ListHeaderComponent={() => {
                return <>
                    <Topo />                           
                </>
            }}
        />                
    </>
}
