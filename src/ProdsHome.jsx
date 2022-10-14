import React from "react";
import prodsData from "./prodsData";
import ShowProds from "./ShowProds";

const prodshome = () => {
    return (
        <>
            <div className = 'prodspace'>
             { prodsData.map((val,index) => {
                  return(<ShowProds srclink = {val.srclink}
                              prodname = {val.prodname}
                              imglink = {val.imglink}
                   /> 
                  );
                })}
                
            </div>
        </>
    );
}
export default prodshome;