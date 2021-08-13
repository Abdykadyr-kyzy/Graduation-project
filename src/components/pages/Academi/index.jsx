import React from "react";
import './Five.css';
import {useSelector} from "react-redux"

export const Academi = () => {
    const store = useSelector((state) => state.auth.data)

   return (
        <div className="container academi">
             <div className="title_academi">
             </div>
             <div style={{display:'flex',height:700,flexDirection: 'column',justifyContent: 'space-between'}}>
                 <h1>{store.comple}</h1>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p>{store.set}</p>
                         <h2>{store.october}</h2>
                     </div>
                     <div className="car_academi">
                         <p>{store.tur}</p>
                         <h2>Javascript,Java</h2>
                         <p>{store.tur1}</p>
                     </div>
                 </div>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p>{store.set}</p>
                         <h2></h2>
                     </div>
                     <div className="car_academi">
                         <p>{store.tur2}</p>
                         <h2>Javascript,Java</h2>
                         <p>{store.may}</p>
                     </div>
                 </div>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p> {store.set}</p>
                         <h2>{store.may2}</h2>
                     </div>
                     <div className="car_academi">
                         <p>{store.tur3}</p>
                         <h2>Javascript,Java</h2>
                         <p>{store.june}</p>
                     </div>
                 </div>
             </div>
        </div>
    )
}