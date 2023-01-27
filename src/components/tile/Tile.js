import React from "react";

export const Tile = (props) => {


  let valArr = Object.values(props.tile);



  if(valArr.length===4){

    return (
      <div className="tile-container">
        {
            
            valArr.map((value,idx)=> {
  
                if(idx===0){
                  return <> 
                            <div className="buttons-div" > <button onClick={() => props.removeItem(props.tile.id)}>X</button> <p className="tile-title">Name: {value}</p></div>
                            
                          </>
                }else if(idx===1){
                  return  <p className="tile"> Phone: {value}</p>
                }else if(idx===2){
                  return  <p className="tile"> Email: {value}</p>
                }
                  
  
            }
          )}
      </div>
    );
          
  }else{

    return (
      <div className="tile-container">
        {
            
            valArr.map((value,idx)=> {
  
                if(idx===0){
                  return <> 
                            <div className="buttons-div" > <button onClick={() => props.removeItem(props.tile.id)}>X</button> <p className="tile-title">Title: {value}</p></div>
                            
                          </>
                }else if(idx===1){
                  return  <p className="tile"> Contact: {value}</p>
                }else if(idx===2){
                  return  <p className="tile"> Date: {value}</p>
                }else if(idx===3){
                  return  <p className="tile"> Time: {value}</p>
                }
 
            }
          )}
      </div>
    );


  }


  
};
