import React from "react";
import Button from '@material-ui/core/Button';
import './First.css';
import first from "../../../images/alaarcha-kyrgyzsta.jpg"
import { data } from "../../../store/data";
import { useSelector } from "react-redux";
import one from "../../../images/2_n.jpg"
import two from "../../../images/3_n.jpg"
import three from "../../../images/5_n.jpg"
import {card} from './card'
import {Link} from "react-router-dom"


export const First = ({data}) => {
    const store = useSelector(state => state.data)

    return(  
        <div className="container first">
             <div className="text">
                 <h1>Туры за рубеж из Бишкека. Горящие туры и лучшие предложения для вашего отдыха!</h1>
                 <p>Время путешествовать с Kyrgyz Concept!</p>
             </div>
             <div className="imgs">
                 <div className="title">
                    <h1>Горящие туры </h1>
                 </div>
                 <div  className="cards">
                    <img className="foto" src={one}></img>
                    <img className="foto" src={two}></img> 
                    <img className="foto" src={three}></img>
                 </div>
             </div>
             <div>
                 <div className="title">
                    <h1>Все туры</h1>
                 </div>
                    {
                        card.map((el,id)=>{
                        return <div card={el} key={id}/>
                        })
                    }
             </div>
        </div>
    )
}