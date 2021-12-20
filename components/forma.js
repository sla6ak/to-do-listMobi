
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function InputToDo ( { onCreatePress } ) {
    let inputValue
    const [text, setText] = useState('')

    const onChenge = ( text ) => {
        setText(text)
    }
    const onInputValue = ( inputValue ) => {
        
        return inputValue = "fjvbdjf"
        // alert (inputValue)
    }
    
    return (
        <View style = {styles.div}>
            <TextInput
            style={styles.inputdo}
            // defaultValue=""
            // ref={input => { this.TextInput = input }}
            placeholder='Write and press on button'
                onChangeText={ onChenge }
                value = {inputValue}
            />
            <View style={styles.buttonadd}>
                <Button 
                    onPress={ () => { 
                        onInputValue(inputValue),
                        onCreatePress( text )
                    } } 
                    style={styles.button}
                    title="Good plan!"
                    color='#841584'
                />
            </View>
        </View>
    )
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// const clearInput = React.useCallback(()=> onChangeText(''), []); // sets value to empty string
//   // you can use the same pattern whenever you want to clear the contents of the text input

//   return (
//     <>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         onChangeText={text => onChangeText(text)}
//         value={value}
//       />
//       <Button title="clear" onPress={clearInput} />
//     </>
//   );
    // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
}

const styles = StyleSheet.create( {
    div: {
        width: '80%'

    },
    inputdo: {
    color: 'rgb(42, 60, 152)',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderBottomColor: 'rgb(142, 60, 152)',
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 3,
    marginTop: 10,
    padding: 10,
    // marginLeft: 20,
    //   marginRight: 20
    },
    buttonadd: {
        marginHorizontal: '30%',
        width: '40%',
        marginTop: 10,
    },
    button: {
        
    }
})