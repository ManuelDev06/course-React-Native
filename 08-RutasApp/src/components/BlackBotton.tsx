import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';


interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

const BlackBotton = ({title, onPress, style}: Props) => {
  return (
    <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={{
            ...style as any,
            ...styles.blacButton
        }}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    blacButton: {
        height: 50,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})

export default BlackBotton