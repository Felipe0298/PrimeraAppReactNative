import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)
    const [number, setNumber] = useState(1)

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 40,
                top:-20,
            }}> Contador: {contador}
            </Text>
            
            <Text style={{textAlign: 'center',
                fontSize: 40}}>
                Numero Aleatorio: {number}
            </Text>

            <Button title='Suma' onPress={() =>setContador(contador+1)}></Button>
            <Button title='Resta' onPress={() =>setContador(contador-1)}></Button>
            <Button title='Random number' onPress={() =>setNumber(Math.floor(Math.random()*777))}></Button>


        </View>
    )
}
