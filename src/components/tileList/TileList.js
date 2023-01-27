import React from "react";
import {Tile} from "../tile/Tile.js"

export const TileList = (props) => {

  const tile = props.object.map((tile,index) => <Tile tile={tile} key={index} removeItem={props.removeItem}  /> )
  
 
  return (
    <div>
       {tile}
    </div>
  );
};
