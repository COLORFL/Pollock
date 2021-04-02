import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const StateContext = React.createContext({});

const StateProvider = ({children}: any) => {
    const [paletteColor, setPaletteColor] = useState([
        '[#0E6251, #148F77, #45B39D, #5DADE2, #21618C]',
        '[#1A5276, #5499C7, #A9CCE3, #BB8FCE, #E8DAEF]',
        '[#909497, #BDC3C7, #F2F3F4, #85929E, #ABB2B9]'
    ]);

    const email = Cookies.get('email')

    const [cookieMonster, setCookieMonster] = useState(email)
    
    const [paletteName, setPaletteName] = useState(['greenShade', 'blueShade', 'rainbow']);

    // const [paletteColor, setPaletteColor] = useState('#fff');
    // const [paletteName, setPaletteName] = useState('');
    const [savedPalette, setSavedPalette] = useState({})

    const [collection, setCollection] = useState([]);
<<<<<<< HEAD

    const collectionHandler = (newCollection: any) => {
        setCollection([...newCollection]);
        console.log('Updated Collection After Delete: ',newCollection);
      };
    
=======
>>>>>>> 8826f4f066c9b81421f0c6ffc31d8271a0ee14c5

    return (
        <StateContext.Provider 
            value={{ 
                paletteColor, 
                setPaletteColor,
                paletteName, 
                setPaletteName,
                savedPalette,
                setSavedPalette,
                cookieMonster,
                setCookieMonster,
                collection,
<<<<<<< HEAD
                setCollection,
                collectionHandler
=======
                setCollection
>>>>>>> 8826f4f066c9b81421f0c6ffc31d8271a0ee14c5
            }}>
            { children }
        </StateContext.Provider>
    )
};

export default StateProvider;


