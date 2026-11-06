import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[misEstilos.contenedor, {backgroundColor:'aqua'}]}>
      <View style={misEstilos.fila}>
      <View style={[misEstilos.caja, {backgroundColor:'#ff0000'}]}></View>
      <View style={[misEstilos.caja, {backgroundColor:'#fa7000'}]}></View>
      <View style={[misEstilos.caja, {backgroundColor:'#ffe600'}]}></View>
      </View>

      <View style={misEstilos.fila}>
      <View style={[misEstilos.caja, {backgroundColor:'#5eff00'}]}></View>
      <View style={[misEstilos.caja, {backgroundColor:'#00ff6a'}]}></View>
      <View style={[misEstilos.caja, {backgroundColor:'#00c3ff'}]}></View>
      </View>

      <View style={misEstilos.fila}>
      <View style={[misEstilos.caja, {backgroundColor:'#0011ff'}]}></View>
      <View style={[misEstilos.caja, {backgroundColor:'#6f00ff'}]}></View>
      <View style={[misEstilos.caja, {backgroundColor:'#ff00f2'}]}></View>
      </View>
      </View>
  );
}

const misEstilos = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  fila:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  caja: {
    //flex: 1,
    width: 70,
    height: 70,
  },
  textoNormal: {
    fontsize:20,
    color: '#232323'
  }
});
