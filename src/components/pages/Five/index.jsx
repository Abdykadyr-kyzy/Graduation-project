import React from "react";
import Button from '@material-ui/core/Button';
import './Five.css';
import five from "../../../images/kyz.jpg"

export const Five = () => {

   return (
        <div className="container first">
             <div className="text">

             </div>
             <div className="img">
                 <img className="fot" src={five}  />
             </div>
        </div>
    )
}