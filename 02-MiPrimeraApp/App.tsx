import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import HolaMundoScreen from './src/screens/HolaMundoScreen'
import ContadorScreen from './src/screens/ContadorScreen';
import { DimesionesScreen } from './src/screens/DimesionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#28425B'}}>
      {/* <HolaMundoScreen/>
      <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimesionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  )
}

export default App
