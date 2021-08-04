import React from "react";
import Button from '@material-ui/core/Button';
import './Three.css';
import { ButtonGroup} from "@material-ui/core";
import bir from "../../../images/7_n.jpg"

export const Three = () => {

   return (
        <div>
             <div>
                  <h1>Туры по Кыргызстану и Центральной Азии</h1>
                  <p>Время путешествовать с Kyrgyz Concept!</p>
             </div>
             <div>
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button>Big tour</Button>
                        <Button>Good tour</Button>
                    </ButtonGroup>
                    <div>
                        <img src={bir}/>
                        <img src={bir}/>
                        <img src={bir}/>
                        <img src={bir}/>
                    </div>
             </div>
        </div>
    )
}