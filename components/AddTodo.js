import React, {useState} from 'react'
import {Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, Platform, Alert} from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('The message cannot be empty')
    }
  }
  
  return (
    <View style={styles.todoWrapper}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
        placeholder='Input the new deal'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TouchableOpacity
        style={styles.cta}
        onPress={pressHandler}
      >
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
    paddingLeft: 10,
    paddingRight: 10,
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
  },
  ctaText: {
    color: 'white',
    fontSize: 20,
  }
})