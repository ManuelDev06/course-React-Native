import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const DimesionesScreen = () => {
  return (
    <View style={styles.container}>
        <View style={{
            ...styles.cajaMorada,
            width: width * 2
        }}
        />
        <View style={styles.cajaNaranja}/>
        <Text style={styles.title}>W: {width}, H:{height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        //width: '50%',
        height: '50%'
    },
    cajaNaranja:{
        backgroundColor: '#F0A22B'
    },
    title:{
        fontSize: 30,
        textAlign: 'center'
    }
});