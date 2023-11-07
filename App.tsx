
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapaScreen from './screens/MapaScreen';
import NovoMarkerScreen from './screens/NovoMarkerScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mapa" component={MapaScreen} />
        <Stack.Screen name="NovoMarker" component={NovoMarkerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;