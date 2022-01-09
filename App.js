import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { Header } from './components/Header'
import { ToDo } from './components/ToDo'

export default function App() {
  const [todos, setTodos] = useState()

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
        <ToDo onSubmit={addTodo} />
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
