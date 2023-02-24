import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Contador: {contador}
            </Text>

            <TouchableOpacity onPress={() => setContador(contador + 1)} style={styles.fabLocationBR}>
                <View style={styles.fab}> 
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setContador(contador - 1)} style={styles.fabLocationBL}>
                <View style={styles.fab}> 
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
    },
    title:{
        textAlign: 'center',
        fontSize: 40,
        top: -20,
    },
    fabLocationBR:{ //BL = Botom Right
        position:'absolute',
        bottom:25,
        right:25
    },
    fabLocationBL:{ //BL = Botom Left
        position:'absolute',
        bottom:25,
        left:25
    },
    fab:{
        backgroundColor:"#5856D6",
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:"center" //Este justify es para centrar verticalmente los hijos, en este caso el boton +1
    },
    fabText:{
        color:"white",
        fontSize:25,
        fontWeight:"bold",
        alignSelf:"center" //Para centrarlo en la mitad
    }
    
})