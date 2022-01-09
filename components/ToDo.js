import React from 'react'
import {Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, Platform} from 'react-native'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const ToDo = props => {
  return (
    <View style={styles.todoWrapper}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.cta}>
        <Text style={styles.ctaText}>{'+'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
    width: screenWidth - 30 - 50 - 10,
    borderRadius: 12,
  },
  cta: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    color: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  }
})