import React, { useState, useContext } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import { useRoute } from '@react-navigation/native';
import { MarcadoresContext } from '../contexts/ContextMarcadores';

function NovoMarkerScreen() {
  const route = useRoute();
  const { latitude, longitude } = route.params;
  const marcadoresObject = useContext(MarcadoresContext);
  const [coordLat, setLat] = useState(latitude.toString());
  const [coordLon, setLon] = useState(longitude.toString());
  const [cor, setCor] = useState({ h: 13, s: 21, v: 32 });

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setLat}
        value={coordLat}
      />
      <TextInput
        style={styles.input}
        onChangeText={setLon}
        value="Digite o nome do marcador"
      />
      <Text>Selecione a cor do marcador</Text>
      <ColorPicker
        sliderComponent={Slider}
        onColorChange={setCor}
        style={{ flex: 1 }}
      />
      <Text>{JSON.stringify(cor)}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default NovoMarkerScreen;
