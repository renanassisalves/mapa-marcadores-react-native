
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapaScreen from './screens/MapaScreen';
import NovoMarkerScreen from './screens/NovoMarkerScreen';
import { MarcadoresProvider } from './contexts/ContextMarcadores';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MarcadoresProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Mapa"
            component={MapaScreen}
            options={{ title: 'Mapa' }}
          />
          <Stack.Screen
            name="NovoMarker"
            component={NovoMarkerScreen}
            options={{ title: 'Novo Marker' }}
          />
        </Stack.Navigator>
      </MarcadoresProvider>
    </NavigationContainer>
  );
}

export default App;