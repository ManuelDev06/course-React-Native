import React, { useContext, useEffect } from 'react'
import { AppState, Button, StyleSheet, Text, View } from 'react-native'
import { checkLocationAccuracy } from 'react-native-permissions';
import BlackBotton from '../components/BlackBotton';
import { PermissionContext } from '../context/PermissionsContext';

const PermissionScreen = () => {

  const {permissions, askLocationPermission} = useContext(PermissionContext)

  
  return (
    <View style={styles.container}>

        <Text style={styles.title}>Es necesario el uso del GPS para usar esta aplicacion</Text>

        <BlackBotton
          title='Permiso'
          onPress={askLocationPermission}
        />

        <Text style={{marginTop: 20}}>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      width: 250,
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 10
    }
});

export default PermissionScreen