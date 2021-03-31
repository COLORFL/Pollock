import React, { useState } from 'react';

export const StateContext = React.createContext({});

const StateProvider = ({children}: any) => {
    const [paletteColor, setPaletteColor] = useState([
        '[#0E6251, #148F77, #45B39D, #5DADE2, #21618C]',
        '[#1A5276, #5499C7, #A9CCE3, #BB8FCE, #E8DAEF]',
        '[#909497, #BDC3C7, #F2F3F4, #85929E, #ABB2B9]'
    ]);
    
    const [paletteName, setPaletteName] = useState(['greenShade', 'blueShade', 'rainbow']);


    // const [paletteColor, setPaletteColor] = useState('#fff');
    // const [paletteName, setPaletteName] = useState('');
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


