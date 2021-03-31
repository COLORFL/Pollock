import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../provider/StateProvider";
import { ChromePicker } from 'react-color'
import { SwatchesPicker } from 'react-color'
import { CirclePicker } from 'react-color'

import { setSourceMapRange } from "typescript";


const ColorPicker = () => {
    // const {paletteColor, setPaletteColor}:  any = useContext(StateContext)
    const [activeColor, setactiveColor]= useState('#fff')
    const [Color1, setColor1]= useState('')
    const [Color2, setColor2]= useState('')
    const [Color3, setColor3]= useState('')
    const [Color4, setColor4]= useState('')
    const [Color5, setColor5]= useState('')
    const [formKey, setFormKey]= useState(0)
    // const [showColorPicker, setshowColorPicker] = useState(false)
    // const [paletteName, setPaletteName] = useState('');
    const { paletteName, setPaletteName, savedPalette, setSavedPalette }: any = useContext(StateContext)
    
    const handleSavePalette = () => {
        const colors = [Color1, Color2, Color3, Color4, Color5,]
        setSavedPalette(savedPalette[paletteName] = colors)
        setFormKey(formKey+1)
        console.log(savedPalette,colors)
        //here is where we will input the palette into the db
        
    }
    return (
        <div className='color-picker'>
            <h1>Color Picker</h1>   
            {/* <button onClick={()=> setshowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker? 'close color picker': 'pick a color' }</button> */}
            <SwatchesPicker 
            color={activeColor}
            onChange={(newColor)=>{setactiveColor(newColor.hex)
            console.log('color 1 is:', activeColor )}}
            />
            <div className='colorButton'>
                <button  style={{backgroundColor: Color1}} onClick={()=>{setColor1(activeColor);console.log('Color1 is:',Color1 )}}>save color 1</button> 
                {/* <div className='cont1' style={{backgroundColor: activeColor, height:'300px',width:'300px'}}>    </div> */}
                {/* <div className='cont1' style={{backgroundColor: activeColor}}>    </div> */}

                {/* <a style={{backgroundColor: activeColor}}> ok lets try this    </a> */}

                <button  style={{backgroundColor: Color2}} onClick={()=>{setColor2(activeColor);console.log('Color2 is:',Color2 )}}>save color 2</button>  
                <button  style={{backgroundColor: Color3}} onClick={()=>{setColor3(activeColor);console.log('Color3 is:',Color3 )}}>save color 3</button>  
                <button  style={{backgroundColor: Color4}} onClick={()=>{setColor4(activeColor);console.log('Color4 is:',Color4 )}}>save color 4</button>  
                <button  style={{backgroundColor: Color5}} onClick={()=>{setColor5(activeColor);console.log('Color5 is:',Color5 )}}>save color 5</button>         
            </div>
            {/* <h2>The last color picked was: {activeColor}</h2> */}
            <div id='paletteName'>
                <input type="text" key={formKey} placeholder='Palette Name' onChange={(e) => setPaletteName(e.target.value)}/>
                <button onClick={() => handleSavePalette()}>Save This Palette</button>

            </div>
            {/* bootstrap example: */}
            {/* <div class="input-group mb-2"> */}
            {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div> */}
        </div>
    )
};

export default ColorPicker;
