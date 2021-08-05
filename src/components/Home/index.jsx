import React from "react";
import './Home.css';
import {useSelector } from "react-redux";
import bir from "../../images/7_n.jpg"
import { ButtonGroup,Button } from "@material-ui/core";
import {Link} from "react-router-dom"
import {Header} from "../Header"

export const Home = () => {

    const store = useSelector(state => state.data)

    return (
        <div className="container home">
            <div className="big">
                   <h1>Kyrgyzstan</h1>
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
                    <img src={bir}/>
                    <img src={bir}/>
                </div>
                {/* <div className="home_card">
                    <p>2000 сом</p>
                    <Button>bron naw</Button>
                </div> */}
                <Link to="/first"><Button>See all programs</Button></Link>
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
                <Link to="/three"><Button>See all programs</Button></Link>
            </div>
        </div>
    )
}