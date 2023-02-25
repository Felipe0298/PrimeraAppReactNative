import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    position?: "br" | "bl"
}

export const Fab = ({ title, onPress, position = "br" }: Props) => {
    console.log(title)
    return (
        <View style={
            [styles.fabLocation,
            (position === "bl")
                ? styles.left
                : styles.right]}
                >
                    
            <TouchableNativeFeedback onPress={onPress} background = {TouchableNativeFeedback.Ripple("blue",false, 30)}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: { //BL = Botom Left //BR = Botom Right
        left: 25
    },
    right: {
        right: 25
    },
    fab: {
        backgroundColor: "#5856D6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center", //Este justify es para centrar verticalmente los hijos, en este caso el boton +1
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    fabText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center" //Para centrarlo en la mitad
    }
})