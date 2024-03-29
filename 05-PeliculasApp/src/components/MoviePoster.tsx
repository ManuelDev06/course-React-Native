import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

const MoviePoster = ({movie,height = 420, width = 300}:Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen' as never, movie as never)} 
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    image:{
      flex:1,
      borderRadius: 18
    },
    imageContainer:{
      flex:1,
      borderRadius: 18,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 7,

      elevation: 10,
    }
});

export default MoviePoster