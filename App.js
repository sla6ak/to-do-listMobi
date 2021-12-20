
import React ,{ useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button, FlatList, VirtualizedList } from 'react-native';
import Header from './components/Header';
import ArreyToDo from './components/ArreyToDo';
import InputToDo from './components/forma';


export default function App () {

  const [ listItems, setList ] = useState( [ { text: 'create a plan', key: '11111' }, { text: 'make a plan', key: '22222' } ] )
  const onCreatePress = ( text) => {
    // alert(text)
    setList( ( listItems ) => {
      const addArr = [ { text: text, key: Math.random().toString().substring(2, 7) }, ...listItems ]
      return addArr
    } )
  }
  const onDeletePress = ( keyEl ) => {
    setList( ( listItems ) => {
      // alert( keyEl )
      // return [ ...listItems ]

      // return [...listItems.filter((el)=>{ el.key != keyEl })]
      
      const tryPush = new Array()
      listItems.forEach( ( el ) => {
        if ( el.key != keyEl ) {
        tryPush.push(el)
      }})
      return tryPush
    })
  }
  return (
    <ImageBackground
       source={require('./assets/image/flowers.jpg')}
       style={styles.image}
    >
      <View style={styles.container}>
        <Header />
        <InputToDo onCreatePress={ onCreatePress }/>
        <FlatList style={{width: '100%'}} data={ listItems } renderItem = { ( { item } ) => (
        <ArreyToDo onDeletePress = { onDeletePress } itemEl = { item } /> ) } />
      </View>
    </ImageBackground> 
  );
}

const styles = StyleSheet.create( {
    image:{
    resizeMode: 'cover',
    //    width: '100%',
    //    height: '100%',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    },
    container: {
    flex: 1,
    // backgroundColor: '#aaf',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
    },
});


function onCreatePress () {
  const create = document.querySelector( "#5435" )
  const elem = React.createElement('text', null, 'vhfbvbdfh')
    create.innerHTML(elem);
  }