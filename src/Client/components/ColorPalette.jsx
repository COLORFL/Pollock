import React, { Component, useContext, useEffect, useState} from "react";
import EachPalette from './EachPalette';

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
  };

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
          palette={JSON.parse(ele.palette)}
          email={ele.email_fk}
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
};

export default ColorPalette;
