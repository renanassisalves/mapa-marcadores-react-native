import React, { createContext, useState, useContext } from 'react';

const MarcadoresContext = createContext();

export { MarcadoresContext };

export const MarcadoresProvider = ({ children }) => {
    const [marcadores, setMarcadores] = useState({
        listaMarcadores: [
            {
                title: 'Marcador1',
                latitude: -20.9570274,
                longitude: -48.4733242,
                color: 'yellow',
            },
            {
                title: 'Marcador2',
                latitude: -20.9638002,
                longitude: -48.4730667,
                color: 'blue',
            },
            {
                title: 'Marcador3',
                latitude: -20.9738002,
                longitude: -48.4730667,
                color: 'purple',
            }
        ],
        localizacaoInicial: {
            latitude: -20.9570274,
            longitude: -48.4733242,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    });

    const addMarcador = (newMarcador) => {
        setMarcadores({
            ...marcadores,
            listaMarcadores: [...marcadores.listaMarcadores, newMarcador]
        });
    };

    return (
        <MarcadoresContext.Provider value={{ ...marcadores, addMarcador }}>
            {children}
        </MarcadoresContext.Provider>
    );
};
