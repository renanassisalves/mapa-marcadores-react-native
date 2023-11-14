import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { MarcadoresContext } from '../contexts/ContextMarcadores';


function MapComponent({localizacaoAtual, setLocalizacaoAtual, marcadores, navigation, route }) {
  const marcadoresObject = useContext(MarcadoresContext);
  console.log(route?.params?.initialRegion)
  const [initialRegion, setInitialRegion] = useState(
    route?.params?.initialRegion || marcadoresObject.localizacaoInicial
  );
  
  useEffect(() => {
    const solicitarPermissaoDeLocalizacao = async () => {
      try {
        const concedida = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (concedida === PermissionsAndroid.RESULTS.GRANTED) {
          obterLocalizacaoAtual();
        } else {
          console.log('Permissão de localização negada');
        }
      } catch (error) {
        console.error('Erro ao solicitar permissão de localização: ', error);
      }
    };

    const obterLocalizacaoAtual = () => {
      
      Geolocation.getCurrentPosition(
        (posicao) => {
          const { latitude, longitude } = posicao.coords;
          setInitialRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        },
        (error) => {
          console.error('Erro ao obter a localização atual: ', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    solicitarPermissaoDeLocalizacao();

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      onPress={(event) => {
        const { coordinate } = event.nativeEvent;
        setLocalizacaoAtual(coordinate);
      }}
    >
      {marcadores.map((item, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: item.latitude, longitude: item.longitude }}
          pinColor={item.color}
          title={item.title}
        />
      ))}
      <Marker
        coordinate={{ latitude: localizacaoAtual.latitude, longitude: localizacaoAtual.longitude }}
        title='Localização selecionada'
        key={'atual'}
        pinColor={"orange"}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
