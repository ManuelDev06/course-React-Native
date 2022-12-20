import React from 'react'
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter'

import Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import CastItem from './CastItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

const MovieDetails = ({movieFull, cast}:Props) => {
  return (
    <>
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icon
                    name='star-outline'
                    color='grey'
                    size={16}
                />
                <Text>{movieFull.vote_average}</Text>

                <Text style={{marginLeft: 5,  color: 'black'}}>
                    - { movieFull.genres.map(g => g.name).join(', ') }
                </Text>
            </View>

            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: 'black'}}>
                Historia
            </Text>

            <Text style={{fontSize: 16,  color: 'black'}}>
                {movieFull.overview}
            </Text>

            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: 'black'}}>
                Presupuesto
            </Text>

            <Text style={{fontSize: 18,  color: 'black'}}>
                {currencyFormatter.format(movieFull.budget,{code: 'USD'})}
            </Text>
        </View>
        <View style={{marginTop: 10, marginBottom:100}}>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, color:'black'}}>
                Actores
            </Text>
            
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ ({item}) => <CastItem actor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 10, height: 70}}
            />
        </View>
    </>
  )
}

export default MovieDetails