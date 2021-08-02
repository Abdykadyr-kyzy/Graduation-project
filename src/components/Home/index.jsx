import React from "react";
import './Home.css';
import {useSelector } from "react-redux";


export const Home = () => {

    const store = useSelector(state => state.data)
    
    return (

        <div className="container home">
            <div>
                <p>{store.home}</p>
                <h1>Kyrgyzstan</h1>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}