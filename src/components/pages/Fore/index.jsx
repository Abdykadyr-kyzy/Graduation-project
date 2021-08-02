import React from "react";
import Button from '@material-ui/core/Button';
import './Fore.css';
import fore from "../../../images/six.jpg"

export const Fore = () => {

   return (
        <div className="container first">
             <div className="img">
                 <img className="foto" src={fore}  />
             </div>
             <div className="text">

             </div>
        </div>
    )
}