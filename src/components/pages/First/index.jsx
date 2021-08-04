import React from "react";
import './First.css';
import { data } from "../../../store/data";
import { useSelector } from "react-redux";
import zero from '../../../images/7_n.jpg'
import one from "../../../images/2_n.jpg"
import two from "../../../images/3_n.jpg"
import three from "../../../images/5_n.jpg"


export const First = ({data}) => {
    const store = useSelector(state => state.data)

    return(  
        <div className="first">
             <div className="head">
                 <h1>Туры за рубеж из Бишкека. Горящие туры и лучшие предложения для вашего отдыха!</h1>
                 <p>Время путешествовать с Kyrgyz Concept!</p>
             </div>
             <div className="first_title">
                 <div>
                        <div className="title">
                            <h1>Горящие туры </h1>
                        </div>
                        <div  className="cards">
                            <img src={zero}/>
                            <img src={one}/>
                            <img src={two}/> 
                            <img src={three}/>
                        </div>
                 </div>
                 <div>
                        <div>
                            <h1>Все туры</h1>
                        </div>
                        <div  className="cards">
                            <img src={zero}/>
                            <img src={one}/>
                            <img src={two}/> 
                            <img src={three}/>
                        </div>
                 </div>
             </div>
        </div>
    )
}