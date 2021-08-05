import React from "react";
import './First.css';
import { data } from "../../../store/data";
import { useSelector } from "react-redux";
import zero from '../../../images/7_n.jpg'
import one from "../../../images/2_n.jpg"
import two from "../../../images/3_n.jpg"
import three from "../../../images/5_n.jpg"
import { Divider } from "@material-ui/core";


export const First = ({data}) => {
    const store = useSelector(state => state.data) 

    return(  
        <div style={{height: 1500,backgroundColor:'cornsilk',width: 1450,display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between' }}>
            <div className="title">
                <h1>Туры за рубеж из Бишкека.<br/> Горящие туры и лучшие предложения <br/>для вашего отдыха!</h1>
                <p>Время путешествовать с Kyrgyz Concept!</p>
            </div>
            <div className="cards">
                <div className="word">
                    <h1>Горящие туры </h1>
                </div>
                <div className="fotos">
                    <img src={zero}/>
                    <img src={one}/>
                    <img src={two}/> 
                    <img src={three}/>
                </div>
             </div>
             <div className="cards">
                 <div className="word">
                    <h1>Все туры</h1>
                </div>
                <div className="fotos">
                    <img src={zero}/>
                    <img src={one}/>
                    <img src={two}/> 
                    <img src={three}/>
                </div>
            </div>
            <div className="card">
                <h1>Горящие туры в любую страну из Бишкека</h1>
                <p>Туры за границу из Бишкека придутся по душе
                     всем любителям ярких впечатлений. Романтические
                      туры в Париж, Рим и Неаполь. Незабываемый отдых 
                      в Таиланде, туры для парочек в райских уголках 
                      нашей планеты — живописные Бали и Гоа.  
                      Экскурсионные туры по магической Чехии, величественной Италии,
                       утонченной Франции, колоритной Грузии… Горящие
                        путевки в солнечную Анталию или роскошный Дубай. Любая из 
                        предложенных нами стран уникальна, интересна и необыкновенно красива.</p>
            </div>
        </div>
    )
}