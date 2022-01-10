import { useState } from 'react'
import { Platform, StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native'
import { Header } from './components/Header'
import { AddTodo } from './components/AddTodo'
import { ListItem } from './components/ListItem'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'xxx1'},
    { id: 2, title: 'xxx2'},
    { id: 3, title: 'xxx3'},
    { id: 4, title: 'xxx4'},
  ])

  const addTodo = (title) => {
    setTodos((list) => [
      {
        id: Date.now().toString(),
        title
      },
      ...list
    ])
  }
  
  const deleteTodo = (id) => {
    setTodos((list) => {
      return list.filter(todos => todos.id != id)
    })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <AddTodo addHandler={addTodo} />

        <View>
          <FlatList data={todos} renderItem={({ item }) => (
            <ListItem item={item} deleteHandler={deleteTodo} />
          )} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Platform.OS !== 'ios' ? 'red' : 'green',
  },
  container: {
    height: Platform.OS === 'web' ? '100vh' : '100%',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
