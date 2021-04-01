import { ContactlessOutlined } from "@material-ui/icons";
import React, { Component, useContext, useEffect, useState} from "react";
import {StateContext} from "../provider/StateProvider";

import EachPalette from './EachPalette';

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
  };

  // { greenShade: ['#0E6251', '#148F77', '#45B39D', '#5DADE2', '#21618C'] },
  // { blueShade: ['#1A5276', '#5499C7', '#A9CCE3', '#BB8FCE', '#E8DAEF'] },
  // { rainbow: ['#909497', '#BDC3C7', '#F2F3F4', '#85929E', '#ABB2B9'] }

  componentDidMount() {
    // dummy hardcoded data
    const email = 'k@s.com';
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
        this.setState({collection: res})
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }

  render() {
    const { collection } = this.state

    if (!collection) return null;

    const paletteElems = collection.map((ele) => {
      return (
        <EachPalette
          key={ele._id}
          paletteName={ele.palette_name}
          palette={ele.palette}
          email={ele.email_fk}
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
