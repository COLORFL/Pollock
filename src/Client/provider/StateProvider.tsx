import React, { useState } from 'react';

export const StateContext = React.createContext({});

const StateProvider = ({children}: any) => {
    const [palletColor, setPalletColor] = useState('');
    const [palletName, setPalletName] = useState('');
    return (
        <StateContext.Provider 
        value = {{ 
           palletColor, 
           setPalletColor,
           palletName, 
           setPalletName
          }}>
          { children }
        </StateContext.Provider>
    )};

    export default StateProvider;
