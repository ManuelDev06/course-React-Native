import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import { PermissionsProvicer } from './src/context/PermissionsContext';

const AppState = ({children}:any) => {
  
  return(
  <PermissionsProvicer>
    {children}
  </PermissionsProvicer>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator/>
      </AppState>
    </NavigationContainer>
  )
}

export default App