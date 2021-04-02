import React, { Component, useContext, useEffect, useState} from "react";
import EachPalette from './EachPalette';
import { StateContext } from "../provider/StateProvider";


const ColorPaletteTwo = () => {
  const { cookieMonster, setCookieMonster }: any = useContext(StateContext);
<<<<<<< HEAD
  const { collection, setCollection, collectionHandler }: any = useContext(StateContext);
=======
  const { collection, setCollection }: any = useContext(StateContext);
>>>>>>> 8826f4f066c9b81421f0c6ffc31d8271a0ee14c5
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
<<<<<<< HEAD
    .then(res => res.json())
    .then(res => {
      console.log('Query res: ', res);
      // setCollection(() => {
      //   collection.join(res)
      // })
      collectionHandler(res);
    })
    .catch(err => {
      console.log('Error: ', err);
    })
  }, [])

  console.log('Collection Type: ', collection)
=======
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
>>>>>>> 8826f4f066c9b81421f0c6ffc31d8271a0ee14c5

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
