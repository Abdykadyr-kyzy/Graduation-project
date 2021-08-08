import React from "react";
import './Five.css';

export const Academi = () => {

   return (
        <div className="container academi">
             <div className="title_academi">
             </div>
             <div style={{display:'flex',height:700,flexDirection: 'column',justifyContent: 'space-between'}}>
                 <h1>Пройденные</h1>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p>НАБОР ОТ</p>
                         <h2>20 october 2020 г.</h2>
                     </div>
                     <div className="car_academi">
                         <p>1-tur</p>
                         <h2>Javascript,Java</h2>
                         <p>1 december 2021 г. - 28 февраля 2021 г.</p>
                     </div>
                 </div>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p>НАБОР ОТ</p>
                         <h2>27 февраля 2021 г.</h2>
                     </div>
                     <div className="car_academi">
                         <p>2-tur</p>
                         <h2>Javascript,Java</h2>
                         <p>27 may 2021 г. - 30 may 2021 г.</p>
                     </div>
                 </div>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p> НАБОР ОТ</p>
                         <h2>20 may 2021 г.</h2>
                     </div>
                     <div className="car_academi">
                         <p>3-tur</p>
                         <h2>Javascript,Java</h2>
                         <p>1 iun 2021 г. - 30 august 2020 г.</p>
                     </div>
                 </div>
             </div>
        </div>
    )
}