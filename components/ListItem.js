import React, {useState} from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

export const ListItem = ({item, deleteHandler}) => {
  return (
    <TouchableHighlight onPress={() => deleteHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderStyle: solid,
    marginTop: 20,
    width: '60%',
  }
})