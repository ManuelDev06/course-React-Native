import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatar:{
        width:150,
        height: 150
    },
    avatarContainer: {
        alignItems: 'center'
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50
    },
    menuTexto:{
        fontSize: 20
    },
    menuBoton:{
        marginVertical: 10,
        flexDirection: 'row'
    }
});