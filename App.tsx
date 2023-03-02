import React from 'react'
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
//import { ContadorScreen } from './src/screens/ContadorScreen'
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { SafeAreaView } from 'react-native/';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ContadorScreen /> */}
      {/* <HolaMundoScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      <PositionScreen/>
    </SafeAreaView>
  )
}


