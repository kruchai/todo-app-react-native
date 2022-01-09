import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { Header } from './components/Header'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'xxx'},
    { id: 2, title: 'xxx'},
    { id: 3, title: 'xxx'},
    { id: 4, title: 'xxx'},
  ])

  const addTodo = title => {
    setTodos(previousTodo => [
      {
        id: Date.now().toString(),
        title
      },
      ...previousTodo
    ])
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <AddTodo onSubmit={addTodo} />

        <View>
          {todos.map(todo => {
            return (
              // <TodoList title={todo.title} key={todo.id} />
              <Text key={todo.id}>{todo.title}</Text>
            )
          })}
        </View>
        <StatusBar style="auto" />
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
