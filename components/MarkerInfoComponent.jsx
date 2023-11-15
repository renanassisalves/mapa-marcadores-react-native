import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MarkerMenuComponent({ localizacaoAtual, navigation }) {
  return (
    <View style={styles.caixa}>
      <Text style={styles.titulo}>Clique no mapa para selecionar um local para criar um marcador</Text>
      <Text style={styles.texto}>Latitude: {localizacaoAtual.latitude}</Text>
      <Text style={styles.texto}>Longitude: {localizacaoAtual.longitude}</Text>

      <TouchableOpacity style={styles.botaoAdicionar} onPress={() => {
        navigation.navigate('NovoMarker', {
          latitude: localizacaoAtual.latitude,
          longitude: localizacaoAtual.longitude,
        });
      }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Adicionar novo marcador</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoAdicionar} onPress={() => {
        navigation.navigate('ListaMarkers');
      }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Listar marcadores</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    margin: 25,
  },
  botaoAdicionar: {
    color: 'purple',
    alignItems: 'center',
    backgroundColor: '#0000DD',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  texto: {
    color: 'blue',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
  titulo: {
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default MarkerMenuComponent;
