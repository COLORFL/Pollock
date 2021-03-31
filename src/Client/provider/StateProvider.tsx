import React, { useState } from 'react';

export const StateContext = React.createContext({});

const StateProvider = ({children}: any) => {
    const [paletteColor, setPaletteColor] = useState('#fff');
    const [paletteName, setPaletteName] = useState('');
    const [savedPalette, setSavedPalette] = useState({})


    return (
        <StateContext.Provider 
            value={{ 
                paletteColor, 
                setPaletteColor,
                paletteName, 
                setPaletteName,
                savedPalette,
                setSavedPalette
            }}>
            { children }
        </StateContext.Provider>
    )
};

export default StateProvider;
