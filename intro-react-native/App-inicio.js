import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={misEstilos.container}>
      <Text style={{fontsize:40, color: 'maroon'}}>Mi primer proyecto react Native</Text>
      <Text style={misEstilos.textoNormal}>LALSDLAD</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const misEstilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoNormal: {
    fontsize:20,
    color: '#232323'
  }
});
