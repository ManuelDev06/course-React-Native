import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        top:100
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        right: -100
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#18C4D9'

    }
})