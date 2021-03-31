import React, { Component, useContext, useEffect, useState} from "react";
import {StateContext} from "../provider/StateProvider";

import EachPalette from './EachPalette';

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [
        { greenShade: ['#0E6251', '#148F77', '#45B39D', '#5DADE2', '#21618C'] },
        { blueShade: ['#1A5276', '#5499C7', '#A9CCE3', '#BB8FCE', '#E8DAEF'] },
        { rainbow: ['#909497', '#BDC3C7', '#F2F3F4', '#85929E', '#ABB2B9'] }
      ]
    };
  };

  // componentDidMount() {
  //   // dummy hardcoded data
  //   const email = 'k@s.com';
  //   fetch(`/colors/${email}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log('res: ', res);
  //       const paletteNameArray = new Array(res.data.length + 1).fill(res.data.rows(0));
  //       const paletteArray = new Array(res.data.length + 1).fill(res.data.rows(0));
  //       this.setState({palette_names: paletteNameArray, palette: paletteArray});
  //     })
  //     .catch(err => {
  //       console.log('Error: ', err);
  //     })
  // }

  render() {
    const { collection } = this.state;

    if (!collection) return null;

    const paletteElems = collection.map((ele, i) => {
      return (
        <EachPalette
          key={i}
          paletteName={Object.keys(ele)[0]}
          palette={Object.values(ele)[0]}
        />
      );
    });

    return (
      <div className="allPalettes">
        {paletteElems}
      </div>
    )
  };
};

export default ColorPalette;
