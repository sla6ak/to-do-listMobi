
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function ArreyToDo ( { itemEl , onDeletePress } ) {
    return (
        <TouchableOpacity
        style = { { width: '100%' } }
        onPress = { (el) => onDeletePress( itemEl.key ) }>
            <Text style={ styles.textItem }>{ itemEl.text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
    textItem: {
    color: 'rgb(42, 60, 152)',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(142, 60, 152)',
    width: '90%',
    marginLeft: '5%'
}
})