import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header () {
    return (
        <View style={ styles.textViev }>
            <StatusBar style="auto" />
            <Text style={ styles.textdo }>Plans to do</Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    textdo: {
        color: '#dcc',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        // marginBottom: 10,
    },
    textViev: {
        backgroundColor: 'rgba(142, 60, 152, 0.2)',
        width: '100%',
    }
})