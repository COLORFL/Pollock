import React, {useContext, useEffect, useState} from "react";
import {StateContext} from "../provider/StateProvider";
import {ChromePicker} from 'react-color'
const ColorPicker = () => {
    return (
        <div>
            <h1>Color Picker</h1>   
            <ChromePicker/>         
        </div>
    )
};

export default ColorPicker;
