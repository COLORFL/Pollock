import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../provider/StateProvider";
import { ChromePicker } from 'react-color'
import { setSourceMapRange } from "typescript";


const ColorPicker = () => {
    // const {paletteColor, setPaletteColor}:  any = useContext(StateContext)
    const [activeColor, setactiveColor]= useState('#fff')
    const [lastColor,setLastColor]= useState('')
    const [Color1, setColor1]= useState('')
    const [Color2, setColor2]= useState('')
    const [Color3, setColor3]= useState('')
    const [Color4, setColor4]= useState('')
    const [Color5, setColor5]= useState('')
    const [showColorPicker, setshowColorPicker] = useState(false)
    return (
        <div>
            <h1>Color Picker</h1>   
            {/* <button onClick={()=> setshowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker? 'close color picker': 'pick a color' }</button> */}
            <ChromePicker 
            color={activeColor}
            onChange={(newColor)=>{setactiveColor(newColor.hex)
            console.log('color 1 is:', activeColor )}}
            />    
            <button onClick={()=>{setColor1(activeColor);console.log('Color1 is:',Color1 )}}>save color 1</button> 
            <button onClick={()=>{setColor2(activeColor);console.log('Color2 is:',Color2 )}}>save color 2</button>  
            <button onClick={()=>{setColor3(activeColor);console.log('Color3 is:',Color3 )}}>save color 3</button>  
            <button onClick={()=>{setColor4(activeColor);console.log('Color4 is:',Color4 )}}>save color 4</button>  
            <button onClick={()=>{setColor5(activeColor);console.log('Color5 is:',Color5 )}}>save color 5</button>         
            
            <h2>The last color picked was: {activeColor}</h2>     
        </div>
    )
};

export default ColorPicker;
