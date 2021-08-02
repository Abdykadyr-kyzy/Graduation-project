import React from "react";
import Button from '@material-ui/core/Button';
import './Seven.css';
import seven from "../../../images/sulik.jpg"

export const Seven = () => {

   return (
        <div className="container first">
             <div className="text">

             </div>
             <div className="img">
                 <img className="foto" src={seven}  />
             </div>
        </div>
    )
}