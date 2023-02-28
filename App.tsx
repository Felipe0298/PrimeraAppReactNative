import React from 'react'
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
//import { ContadorScreen } from './src/screens/ContadorScreen'
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { SafeAreaView } from 'react-native/';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ContadorScreen /> */}
      {/* <HolaMundoScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen/>
    </SafeAreaView>
  )
}


