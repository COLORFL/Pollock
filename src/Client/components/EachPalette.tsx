import React from "react";

const EachPalette = (paletteName, palette) => {
  // console.log('paletteName: ', paletteName);
  // console.log('palette: ', palette);

  const setOfPalettes = palette.map((ele, i) => (
    <div key={i} className="colorBox" style={{color: `${ele}`}} />
  ))

  return (
    <div className="eachPalette">
      <h4 className="paletteNames">{paletteName}</h4>
      <div className="colorBoxes">
        {setOfPalettes}
      </div>
    </div>
  )
};



export default EachPalette;
