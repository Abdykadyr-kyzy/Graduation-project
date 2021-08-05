import React from "react";
import './Five.css';

export const Academi = () => {

   return (
        <div className="container academi">
             <div className="title_academi">
                 <h1>Академия Kyrgyz Concept</h1>
                 <p>Профессиональные курсы Kyrgyz Concept в Кыргызстане</p>
             </div>
             <div style={{display:'flex',height:700,flexDirection: 'column',justifyContent: 'space-between'}}>
                 <h1>Пройденные</h1>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p>НАБОР ОТ</p>
                         <h2>27 февраля 2020 г.</h2>
                     </div>
                     <div className="car_academi">
                         <p>Профессиональный курс</p>
                         <h2> Менеджер по персоналу</h2>
                         <p>5 апреля 2020 г. - 10 мая 2020 г.</p>
                     </div>
                 </div>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p>НАБОР ОТ</p>
                         <h2>11 сентября 2019 г.</h2>
                     </div>
                     <div className="car_academi">
                         <p>Профессиональный курс</p>
                         <h2>Travel Agent-БЕСПЛАТНЫЙ пробный урок</h2>
                         <p>16 сентября 2019 г. - 4 октября 2019 г.</p>
                     </div>
                 </div>
                 <div className="cards_academi">
                     <div className="card_academi">
                         <p> НАБОР ОТ</p>
                         <h2>17 февраля 2020 г.</h2>
                     </div>
                     <div className="car_academi">
                         <p>Профессиональный курс</p>
                         <h2>Travel Agent - курс по подготовке авиа кассиров (вечер)</h2>
                         <p>24 февраля 2020 г. - 10 марта 2020 г.</p>
                     </div>
                 </div>
             </div>
        </div>
    )
}