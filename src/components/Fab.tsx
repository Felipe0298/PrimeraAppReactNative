import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    position?:"br" | "bl"
}

export const Fab = ({title, onPress, position="br"}:Props) => {
    console.log(title)
  return (
    <>
    <TouchableOpacity onPress={onPress} style={styles.fabLocationBR}>
                <View style={styles.fab}> 
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
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