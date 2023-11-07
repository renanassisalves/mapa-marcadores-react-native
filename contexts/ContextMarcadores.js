import React, { createContext } from 'react';

const MarcadoresContext = createContext();

export { MarcadoresContext };

export const MarcadoresProvider = ({ children }) => {
    const marcadoresObject = {
        listaMarcadores: [
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
            }
        ],
        localizacaoInicial: {
            latitude: -20.9570274,
            longitude: -48.4733242,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    };

    return (
        <MarcadoresContext.Provider value={marcadoresObject}>
            {children}
        </MarcadoresContext.Provider>
    );
};