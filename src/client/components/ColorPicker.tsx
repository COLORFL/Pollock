import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../provider/StateProvider";
import { ChromePicker } from 'react-color'
import { SwatchesPicker } from 'react-color'
import { CirclePicker } from 'react-color'

import { setSourceMapRange } from "typescript";


const ColorPicker = () => {
    const [activeColor, setactiveColor]= useState('#fff')
    const [Color1, setColor1]= useState('#ffffff')
    const [Color2, setColor2]= useState('#ffffff')
    const [Color3, setColor3]= useState('#ffffff')
    const [Color4, setColor4]= useState('#ffffff')
    const [Color5, setColor5]= useState('#ffffff')
    const [formKey, setFormKey]= useState(0)
    // const [showColorPicker, setshowColorPicker] = useState(false)
    // const [paletteName, setPaletteName] = useState('');
    const { 
        paletteName, 
        setPaletteName, 
        savedPalette, 
        setSavedPalette,
        cookieMonster,
        setCookieMonster
    }: any = useContext(StateContext)
    
    const handleSavePalette = () => {
        const colors = [Color1, Color2, Color3, Color4, Color5,]
        const colorsString = `[` + colors.join(",") + `]`;
        // setSavedPalette(savedPalette[paletteName] = colors)
        setFormKey(formKey+1)
        let newColors = colors.map(el => `"${el}"`).join(', ');
        newColors = '[' + newColors + ']';
        console.log('newColors is: ',newColors)
        const list2 = newColors.split(',')
        console.log('list2 is: ', list2)
    // console.log(`select * from tableName where id in (${list})`);
        //here is where we will input the palette into the db
        const email = 'k@s.com';
        const body = {
            palette:newColors,
            email:cookieMonster,
            palette_name:paletteName
        };
        const requestBody = JSON.stringify(body);
        console.log(body)
        fetch(`/palette/`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: requestBody
        })
        .then(res => res.json())
        .then(res => {
          console.log('we made it to the db!! here is the response: ',res);
          console.log('in the db',res[0].palette);
        })
        .catch(err => {
        console.log('Error: ', err);
        })
    }
    return (
        <div className='color-picker'>
            <h1>Color Picker</h1>   
            <SwatchesPicker 
                color={activeColor}
                onChange={(newColor)=>{setactiveColor(newColor.hex)
                console.log('active color is:', activeColor )}}
            />
            <div className='colorButton'>
                <button style={{backgroundColor: Color1}} onClick={()=>{setColor1(activeColor);console.log('Color1 is:',Color1 )}}>save color 1</button> 
                <button style={{backgroundColor: Color2}} onClick={()=>{setColor2(activeColor);console.log('Color2 is:',Color2 )}}>save color 2</button>  
                <button style={{backgroundColor: Color3}} onClick={()=>{setColor3(activeColor);console.log('Color3 is:',Color3 )}}>save color 3</button>  
                <button style={{backgroundColor: Color4}} onClick={()=>{setColor4(activeColor);console.log('Color4 is:',Color4 )}}>save color 4</button>  
                <button style={{backgroundColor: Color5}} onClick={()=>{setColor5(activeColor);console.log('Color5 is:',Color5 )}}>save color 5</button>         
            </div>
            <div id='paletteName'>
                <input type="text" key={formKey} placeholder='Palette Name' onChange={(e) => setPaletteName(e.target.value)}/>
                <button onClick={() => handleSavePalette()}>Save This Palette</button>
            </div>
        </div>
    )
};

export default ColorPicker;
