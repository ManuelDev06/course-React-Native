import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { Text } from 'react-native'
import { MenuLateralBasica } from './src/navigator/MenuLateralBasico'
// import { StackNavigator } from './src/navigator/StackNavigator';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        <MenuLateralBasica/>
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: {children: JSX.Element}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}