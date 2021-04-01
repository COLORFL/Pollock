import React, { Component, useContext, useEffect, useState} from "react";
import EachPalette from './EachPalette';
import { StateContext } from "../provider/StateProvider";


const ColorPaletteTwo = () => {
  const { cookieMonster, setCookieMonster }: any = useContext(StateContext);
  const { collection, setCollection }: any = useContext(StateContext);
  // const [collection, setCollection]= useState([]);

  useEffect(() => {
    const email = cookieMonster;
    const body = {email};
    const requestBody = JSON.stringify(body);
    fetch(`/palette/getAll`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: requestBody
    })
      .then(res => res.json())
      .then(res => {
        console.log('Query res: ', res);
        setCollection(res)
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }, [])

  console.log('Collection Type: ', Array.isArray(collection))

  const paletteElems = collection.map((ele) => {
    return (
      <EachPalette
        _id={ele._id}
        key={ele._id}
        paletteName={ele.palette_name}
        palette={JSON.parse(ele.palette)}
        email_fk={ele.email_fk}
      />
    );
  });

  return (
    <div className="myPalettes">
      <div className="title">
        <h1>My Palettes</h1>
      </div>
      <div className="totalPalettes">
        {paletteElems}
      </div>
    </div>
  )
};

export default ColorPaletteTwo;
