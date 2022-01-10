import { useState } from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

export const ListItem = ({ item, deleteHandler }) => {
  return (
    <TouchableHighlight
      style={styles.todoListWrapper}
      onPress={() => deleteHandler(item.id)}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  todoListWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 12,
    paddingLeft: 15,
    paddingRight: 15,
    minHeight: 50,
  },
  title: {
    textAlign: 'center',
    backgroundColor: '#fafafa',
  }
})