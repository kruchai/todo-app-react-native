import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Platform.OS !== 'ios' ? 'red' : 'green',
  }
});
