import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapComponent from '../components/MapComponent';
import { MarcadoresContext } from '../contexts/ContextMarcadores';
import MarkerMenuComponent from '../components/MarkerInfoComponent';

function MapaScreen({ navigation, route }) {
  const marcadoresObject = useContext(MarcadoresContext);

  const [localizacaoAtual, setLocalizacaoAtual] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.00,
    longitudeDelta: 0.00,
  });

  return (
    <View style={styles.container}>
      <MapComponent
        localizacaoAtual={localizacaoAtual}
        setLocalizacaoAtual={setLocalizacaoAtual}
        marcadores={marcadoresObject.listaMarcadores}
        navigation={navigation}
        route={route}
      />

      <MarkerMenuComponent
        localizacaoAtual={localizacaoAtual}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default MapaScreen;