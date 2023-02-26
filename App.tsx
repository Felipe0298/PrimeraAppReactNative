import React from 'react'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
//import { ContadorScreen } from './src/screens/ContadorScreen'
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { SafeAreaView } from 'react-native/';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"red"}}>
      {/* <ContadorScreen /> */}
      {/* <HolaMundoScreen /> */}

      <BoxObjectModelScreen />
    </SafeAreaView>
  )
}
