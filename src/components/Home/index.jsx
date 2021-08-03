import React from "react";
import './Home.css';
import {useSelector } from "react-redux";
import bir from "../../images/7_n.jpg"
import { ButtonGroup,Button } from "@material-ui/core";
import {Link} from "react-router-dom"


export const Home = () => {

    const store = useSelector(state => state.data)

    return (

        <div className="container home">
            <div className="big">
                <Link to="./first">
                   <h1>Kyrgyzstan</h1>
                </Link>
            </div>
            <div>
                <h1>Время путешествовать с Kyrgyz Concept!</h1>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button>Big tour</Button>
                    <Button>Good tour</Button>
                </ButtonGroup>
                <div>
                    <img src={bir}/>
                    <img src={bir}/>
                    <img src={bir}></img>
                    <img src={bir}></img>
                </div>
                <Button>See all programs</Button>
            </div>
            <div>
                <h1>Туры по Кыргызстану и Центральной Азии</h1>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button>Big tour</Button>
                    <Button>Good tour</Button>
                </ButtonGroup>
                <div>
                    <img src={bir}></img>
                    <img src={bir}></img>
                    <img src={bir}></img>
                    <img src={bir}></img>
                </div>
                <Button>See all programs</Button>
            </div>
        </div>
    )
}