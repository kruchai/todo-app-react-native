import React from 'react'
import {Dimensions, StyleSheet, View, Text, TextInput, Button, Platform} from 'react-native'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const ToDo = props => {
  return (
    <View style={styles.todoWrapper}>
      <TextInput style={styles.input} />
      <Button style={styles.cta} color='#f194ff' title='+' />
    </View>
  )
}

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    borderStyle: 'dotted',
    borderColor: 'green',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
    width: screenWidth - 30 - 100,
  },
  cta: {
    width: 100,
    backgroundColor: 'green',
    color: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  }
})