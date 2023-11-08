import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MarkerComponent } from '../components/MarkerComponent';
import { MarcadoresContext } from '../contexts/ContextMarcadores';
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListaMarkerScreen({navigation}) {
  const marcadoresObject = useContext(MarcadoresContext);
  return (
    <GestureHandlerRootView>
      <View>
        <ScrollView>
          {marcadoresObject.listaMarcadores.map((item, index) => {
            return (
              <MarkerComponent markerObject={item} key={index} navigation={navigation}/>
            );
          })}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

export default ListaMarkerScreen;
