import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { StateContext } from "../provider/StateProvider";
import axios from 'axios';


const EachPalette = ({_id, paletteName, email_fk, palette}) => {
  const { 
    cookieMonster, 
    setCookieMonstercollection, 
    setCollection, 
    collectionHandler  
  }: any = useContext(StateContext);


  const handleDelete = () => {
    axios.delete(`/palette/delete/${paletteName}`, { data: { source: paletteName } })
      .then(data => {
        console.log('data first (AXIOS DELETE): ', data)
        axios.post(`/palette/getAll`,{email:cookieMonster})
          .then((res) => {
            console.log('RES RES (AXIOS POST): ', res.data)
            setCollection(res.data)
          })
          .catch((err) => {
            console.log("err (AXIOS POST) : ", err);
          })
      })
      .catch((err) => {
        console.log("err (AXIOS DELETE): ", err);
      })
  }


  const setOfPalettes = palette.map((ele, i) => (
    <div key={i} className="colorBox" style={{'backgroundColor': `${ele}`}}>
      {ele}
    </div>
  ))

  return (
    <div className="eachPalette">
      <div className="titleAndTrash">
        <h4 className="paletteNames">{paletteName}</h4>
        <div id="spaceFiller"></div>
        <div className="trash">
          <span onClick={handleDelete}>
            <FontAwesomeIcon className="faTrash" icon={faTrash} size="2x" />
          </span>
        </div>
      </div>
      <div className="colorBoxes">
        {setOfPalettes}
      </div>
    </div>
  )
};


export default EachPalette;
