import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const TodoList = ({ todo }) => {
  return (
    <View style={styles.todoListWrapper}>
      <Text>{todo}</Text>
    </View>
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
  }
})