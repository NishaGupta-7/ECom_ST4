import React from "react";
import Image from "./Image";
import Base from "./Base";

const ShowProds = (props) => {

    return (
        <>
        <div className="card">
        <a href={props.srclink} >
          <Image imglink = {props.imglink}/>
          <Base prodname = {props.prodname}
          />
        </a>  
         </div> 
        </>

    );
}

export default ShowProds;