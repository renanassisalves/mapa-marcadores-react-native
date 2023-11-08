import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MarcadoresContext } from '../contexts/ContextMarcadores';
import RNPickerSelect from 'react-native-picker-select';

function NovoMarkerScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { latitude, longitude } = route.params;
  const { addMarcador } = useContext(MarcadoresContext);
  const [coordLat, setLat] = useState(latitude.toString());
  const [coordLon, setLon] = useState(longitude.toString());
  const [cor, setCor] = useState('blue');
  const [nome, setNome] = useState("");

  const adicionarMarcadorAction = () => {
    const newMarker = {
      title: nome,
      latitude: parseFloat(coordLat),
      longitude: parseFloat(coordLon),
      color: cor,
    };

    addMarcador(newMarker);
    navigation.navigate('Mapa');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloElemento}>Nome do marcador</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        placeholder="Digite o nome do marcador"
      />
      <Text style={styles.tituloElemento}>Latitude do marcador</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLat}
        value={coordLat}
        placeholder='Digite a latitude do marcador'
      />
      <Text style={styles.tituloElemento}>Longitude do marcador</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLon}
        value={coordLon}
        placeholder='Digite a longitude do marcador'
      />
      <Text style={styles.tituloElemento}>Selecione a cor do marcador</Text>
      
      <RNPickerSelect
            onValueChange={setCor}
            value={'blue'}
            items={[
                { label: 'Azul', value: 'blue' },
                { label: 'Amarelo', value: 'yellow' },
                { label: 'Verde', value: 'green' },
                { label: 'Vermelho', value: 'red' },
                { label: 'Rosa', value: 'pink' },
            ]}
        />
      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarMarcadorAction}>
        <Text style={{ color: 'white', fontSize: 17 }}>Adicionar novo marcador</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  botaoAdicionar: {
    alignItems: 'center',
    backgroundColor: '#0000DD',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: '100%',
  },
  tituloElemento: {
    fontSize: 20,
    color: 'black',
    margin: 8,
  }
});

export default NovoMarkerScreen;
