import React, { useState } from 'react'
import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native';

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
                top: -20,
            }}> Contador: {contador}
            </Text>

            <TouchableOpacity onPress={() => setContador(contador + 1)}>
                <View style={{
                    backgroundColor: "red",
                    borderRadius: 100
                }}>
                    <Text>Sumar</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}
