import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { Header } from './components/Header'
import { ToDo } from './components/ToDo'

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <ToDo />
        <Text style={styles.text}>{ 'It works' }</Text>
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
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#e9e9e9',
    color: Platform.OS !== 'ios' ? 'red' : 'green',
  }
});
