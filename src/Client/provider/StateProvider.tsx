import React, { useState } from 'react';

export const StateContext = React.createContext({});

const StateProvider = ({children}: any) => {
    const [paletteColor, setPaletteColor] = useState('#fff');
    
    const [paletteName, setPaletteName] = useState('');
    return (
        <StateContext.Provider 
            value={{ 
                paletteColor: paletteColor, 
                setPaletteColor,
                paletteName: paletteName, 
                setPaletteName
            }}>
            { children }
        </StateContext.Provider>
    )
};

export default StateProvider;
