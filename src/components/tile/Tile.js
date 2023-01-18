import React from "react";

export const Tile = (props) => {


  let valArr = Object.values(props.tile);


  return (
    <div className="tile-container">
      {valArr.map((value,idx)=> {

          if(idx===0){
            return <p className="tile-title">{value}</p>
           }else{
            return  <p className="tile">{value}</p>
           }

      }
        )}
    </div>
  );
};
