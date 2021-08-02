import React from "react";
import Button from '@material-ui/core/Button';
import './Second.css';
import second from "../../../images/kol.jpg"

export const Second = () => {

   return (
        <div className="container first">
             <div className="img">
                 <img className="foto" src={second}  />
             </div>
             <div className="text">

             </div>
        </div>
    )
}