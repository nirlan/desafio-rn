import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Topo from './componentes/Topo';
import Item from './componentes/Item';

import logo from '../../../assets/popcorn.png';

export default function Filmes() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=???????????????????????????????????????&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);
   

    return <>
        {isLoading ? <ActivityIndicator /> : (
            <FlatList
                data={data}                              
                keyExtractor={({ id }, index) => id}
                renderItem={Item}

                ListHeaderComponent={() => {
                    return <>
                        <Topo />
                    </>
                }}
            />
        )}
    </>
}
