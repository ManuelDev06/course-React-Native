import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'
import { pokemonApi } from '../api/pokemonApi';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {

    const {top} = useSafeAreaInsets();

    const {simplePokemonList,loadPokemons} = usePokemonPaginated();

  return (
    <>
        <Image
            source={require('../assets/pokebola.png')}
            style={styles.pokebolaBG}
        />

        <Text
            style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10
            }}
        >
            Pokedex
        </Text>

        
        <View
            style={{
                //...styles.globalMargin,
                alignItems: 'center'
            }}
        >
            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={ ({item}) => (
                    <PokemonCard pokemon={item}/>
                )}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                ListFooterComponent={(
                    <ActivityIndicator 
                        style={{height:100}}
                        size={20}
                        color="grey"    
                    />
                )}
            />
        </View>

    </>
  )
}

export default HomeScreen