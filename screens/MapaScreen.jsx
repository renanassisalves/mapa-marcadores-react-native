import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView, {Marker} from "react-native-maps";
import styled from 'styled-components'



const localizacaoInicial = {
          latitude: -20.9570274,
          longitude: -48.4733242,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
}

const listaMarcadores = 
  [
    {
          latitude: -20.9570274,
          longitude: -48.4733242,
    },
    {
          latitude: -20.9638002,
          longitude: -48.4730667,
    },
    {
      latitude: -20.9738002,
      longitude: -48.4730667,
    },
  ]


function MapaScreen({ navigation }) {
  const [localizacaoAtual, setLocalizacaoAtual] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.00,
    longitudeDelta: 0.00,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={localizacaoInicial}
        onPress={(event) => {
          const { coordinate } = event.nativeEvent;
          setLocalizacaoAtual(coordinate);}}
        >
          {
            listaMarcadores.map((item, index) => {
              return (
                <Marker coordinate = {{
                  latitude: item.latitude,
                  longitude: item.longitude
                }}
                key={index}
                pinColor = {"purple"}/>
              );
            })
          }
          <Marker coordinate = {{
                  latitude: localizacaoAtual.latitude,
                  longitude: localizacaoAtual.longitude
                }}
                key={'atual'}
                pinColor = {"orange"}/>
      </MapView>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Clique no mapa para selecionar um local para criar um marcador</Text>
      <Text style={styles.texto}>Latitude: {localizacaoAtual.latitude}</Text>
        <Text style={styles.texto}>Longitude: {localizacaoAtual.longitude}</Text>
      <TouchableOpacity style={styles.botaoAdicionar} onPress={() => {navigation.navigate('NovoMarker')}}>
        <Text style={{color:'white', fontSize: 17}}>Adicionar novo marcador</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  botaoAdicionar: {
    color: 'purple',
    alignItems: 'center',
    backgroundColor: '#0000DD',
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  texto: {
    color: 'blue',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5
  },
  titulo: {
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5
  },
  caixa: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    margin: 25
  }
});


export default MapaScreen;