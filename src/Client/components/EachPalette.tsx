import React from "react";

const EachPalette = ({_id, paletteName, email_fk, palette}) => {
  const paletteArray = JSON.parse(palette);

  

  const setOfPalettes = paletteArray.map((ele, i) => (
    <div key={i} className="colorBox" style={{'backgroundColor': `${ele}`}}>
      {ele}
    </div>
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
