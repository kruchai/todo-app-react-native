import { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const ListItem = ({ item, deleteHandler }) => {
  return (
    <View
      style={styles.todoListWrapper}
    >
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity
        style={styles.cta}
        onPress={() => deleteHandler(item.id)}
      >
        <Text style={styles.ctaDelete}>{'❌'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todoListWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    width: '100%',
  },
  title: {
    lineHeight: 50,
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
    backgroundColor: '#ffb6b2',
    color: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffb6b2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
})