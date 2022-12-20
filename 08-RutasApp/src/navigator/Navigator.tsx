import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useEffect } from 'react';
import MapScreen from '../screens/MapScreen';
import PermissionScreen from '../screens/PermissionScreen';
import { PermissionContext } from '../context/PermissionsContext';
import LoadingScreen from '../screens/LoadingScreen';
import { AppState } from 'react-native';

const Stack = createStackNavigator();




function Navigator() {
  
  const {permissions} = useContext(PermissionContext)

  
  if(permissions.locationStatus === 'unavailable'){
    return <LoadingScreen/>
  }

  return (
    <Stack.Navigator
    initialRouteName='PermissionScreen'
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      {(permissions.locationStatus === 'granted')
        ?<Stack.Screen name="MapScreen" component={MapScreen} />
        :<Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      }
    </Stack.Navigator>
  );
}

export default Navigator;