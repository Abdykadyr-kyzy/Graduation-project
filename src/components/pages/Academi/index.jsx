import React from "react";
import Button from '@material-ui/core/Button';
import './Five.css';
import five from "../../../images/kyz.jpg"
import SubwayIcon from "@material-ui/icons/Subway";
import SchoolIcon from "@material-ui/icons/School"

export const Academi = () => {

   return (
        <div className="container academi">
             <div className="text">
                 <h1>Академия Kyrgyz Concept</h1>
             </div>
             <div>
                        <div>
                            <SubwayIcon/>
                            <p>Курьерские услуги</p>
                        </div>
                        <div>
                            <SubwayIcon/>
                            <p>Курьерские услуги</p>
                        </div>
                        <div>
                            <SchoolIcon/>
                            <p>Грузоперевозки</p>
                        </div>
                        <div>
                            <SubwayIcon/>
                            <p>Джип туры</p>
                        </div>
             </div>
        </div>
    )
}