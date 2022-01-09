import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export const Header = props => {
  return (
    <View style={styles.header}>
      <Text>{'ToDo App'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
  }
})