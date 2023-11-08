import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


export const MarkerComponent = ({ markerObject, navigation }) => {
    const mostrarNoMapaHandler = () => {
        navigation.navigate('Mapa', {
          initialRegion: {
            latitude: markerObject.latitude,
            longitude: markerObject.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      }
    return <>
        <View style={styles.container}>
            <Text style={styles.tituloElemento}>{markerObject.title}</Text>
            <Text>{markerObject.latitude}</Text>
            <Text>{markerObject.longitude}</Text>
            <View style={{backgroundColor: markerObject.color, height: 25, width: 25, borderRadius: 10}}/>
            <TouchableOpacity style={styles.botao} onPress={mostrarNoMapaHandler}>
            <Text style={{ color: 'white', fontSize: 17 }}>Ver no mapa</Text>
            </TouchableOpacity>
        </View>
    </>
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 10
    },
    input: {
      height: 40,
      width: '100%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    botao: {
      alignItems: 'center',
      backgroundColor: '#0000DD',
      padding: 5,
      margin: 5,
      borderRadius: 5,
      width: '30%',
    },
    tituloElemento: {
      fontSize: 20,
      color: 'black',
      margin: 8,
    }
  });
