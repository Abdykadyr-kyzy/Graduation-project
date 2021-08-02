import React from "react";
import Button from '@material-ui/core/Button';
import './First.css';
import first from "../../../images/alaarcha-kyrgyzsta.jpg"
import { data } from "../../../store/data";
import { useSelector } from "react-redux";

export const First = () => {

    const store = useSelector(state => state.data)

   return (
        <div className="container first">
             <div className="text">
                 <h1>{store.title1}</h1>
                <p>{store.first}</p>
                <Button>Read more</Button>
             </div>
             <div className="img">
                 <img className="foto" src={first}  />
             </div>
        </div>
    )
}