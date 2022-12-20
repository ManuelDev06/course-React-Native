import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

const screenHeigh = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const DetailScreen = ({route,navigation}: Props) => {

  const movie = route.params 
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading, cast, movieFull} =  useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
         <View style={styles.imageBorder}>
            <Image
              source={{uri}}
              style={styles.posterImage}
            />
         </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
        {
          isLoading
            ? <ActivityIndicator size={30} color='grey'/>
            : <MovieDetails
                movieFull={movieFull!}
                cast={cast}
              />
        }
      <View
       style={styles.backButton}
      >
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >
          <Icon
            color="white"
            name="arrow-back-outline"
            size={60}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
      width: '100%',
      height: screenHeigh * 0.7,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
      },
      imageBorder:{
        flex:1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
      },
      posterImage:{
        flex:1
      },
      marginContainer:{
        marginHorizontal: 20,
        marginTop: 20
      },
      subTitle:{
        fontSize: 16,
        opacity: 0.8
      },
      title:{
        fontSize:20,
        fontWeight: 'bold',
        color:'black'
      },
      backButton:{
        position:'absolute',
        zIndex: 999,
        elevation: 9,
        top:30,
        left:5
      }
});

export default DetailScreen