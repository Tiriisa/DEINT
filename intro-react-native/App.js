import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={misEstilos.contenedor}>
      <Text style={misEstilos.titulo}>Imagen desde una URI</Text>
      <Image source={{uri:"https://picsum.photos/id/40/367/267"}} style={misEstilos.Image}/>

      <Text style={misEstilos.titulo}>Imagen desde un recurso externo</Text>
      <Image source={require("./assets/coches.jpg")} style={misEstilos.Image}/>
    </View>
  );
}

const misEstilos = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'space-evenly',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Image:{
    width:400,
    height:300,
    borderRadius: 30
  },
  titulo:{
    fontSize: 40,
    marginBottom: 10,
  },
});
