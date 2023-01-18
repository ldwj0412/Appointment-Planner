import React from "react";
import {Tile} from "../tile/Tile.js"

export const TileList = (props) => {

  const tile = props.tiles.map((tile,index) => <Tile tile={tile} key={index} /> )
  
 
  return (
    <div>
       {tile}
    </div>
  );
};
